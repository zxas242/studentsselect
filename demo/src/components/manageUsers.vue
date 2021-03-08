<template>
  <div class="manageuser">
   <div class="person">
      <span style="font-size:18px;padding-right:1rem;">详情:</span>学生用户总数: 
      <span style="color:red;margin:0 5px;font-size:18px;">{{Userlist.length}}</span>人，
      管理员用户: <span style="color:red;margin:5px 0;font-size:18px;">1</span>人.
   </div>
    <el-table stripe='true'
    :data="Userlist" style="width: 90%;margin-top:1rem;font-size:13px;color:skyblue;">
    <el-table-column label="学生编号" prop="id"> </el-table-column>
    <el-table-column label="名字" prop="name">
          <template slot-scope="scope">
             <el-input  placeholder="请输入内容" v-show="!falg" v-model="scope.row.name" autosize type="textarea"></el-input>
                <span v-show="falg">{{scope.row.name}}</span>
                </template>
    </el-table-column>
    <el-table-column label="密码" prop="pass">
          <template slot-scope="scope">
             <el-input placeholder="请输入内容" v-show="!falg" v-model="scope.row.pass" autosize type="textarea"></el-input>
                <span v-show="falg">{{scope.row.pass}}</span>
                </template>
    </el-table-column>
    <el-table-column label="班级" prop="class">
          <template slot-scope="scope">
             <el-input placeholder="请输入内容" v-show="!falg" v-model="scope.row.class" autosize type="textarea"></el-input>
                <span v-show="falg">{{scope.row.class}}</span>
                </template>
    </el-table-column>
    <el-table-column label="院系" prop="department">
          <template slot-scope="scope">
             <el-input placeholder="请输入内容" v-show="!falg" v-model="scope.row.pass" autosize type="textarea"></el-input>
                <span v-show="falg">{{scope.row.pass}}</span>
                </template>
    </el-table-column>
    <el-table-column label="性别" prop="sex">
          <template slot-scope="scope">
             <el-input placeholder="请输入内容" v-show="!falg" v-model="scope.row.sex" autosize type="textarea"></el-input>
                <span v-show="falg">{{scope.row.sex}}</span>
                </template>
    </el-table-column>
    <el-table-column label="年龄" prop="age">
         <template slot-scope="scope">
             <el-input placeholder="请输入内容" v-show="!falg" v-model="scope.row.age" autosize type="textarea"></el-input>
                <span v-show="falg">{{scope.row.age}}</span>
                </template>
    </el-table-column>
    <el-table-column label="专业" prop="profession">
         <template slot-scope="scope">
             <el-input placeholder="请输入内容" v-show="!falg" v-model="scope.row.profession" autosize type="textarea"></el-input>
                <span v-show="falg">{{scope.row.profession}}</span>
                </template>
    </el-table-column>
    <el-table-column label="地址" prop="address">
         <template slot-scope="scope">
             <el-input placeholder="请输入内容" v-show="!falg" v-model="scope.row.address" autosize type="textarea"></el-input>
                <span v-show="falg">{{scope.row.address}}</span>
                </template>
    </el-table-column>
    <el-table-column label="学分" prop="credit">
         <template slot-scope="scope">
             <el-input placeholder="请输入内容" v-show="!falg" v-model="scope.row.credit" autosize type="textarea"></el-input>
                <span v-show="falg">{{scope.row.credit}}</span>
                </template>
    </el-table-column>

    <el-table-column align="right" label="操作"  width="200">
      <template slot-scope="scope">
        
        <el-button @click="falg=!falg"  size="mini">编辑</el-button>
        <el-button @click="handleChange(scope.$index, scope.row)" v-show="!falg" size="mini" type="success">提交</el-button>

        <el-button @click="handleDelete(scope.$index, scope.row)" v-show="falg" size="mini" type="danger">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
  export default {
    name:'manageuser',
    props:{},
    data () {
      return {
        falg:true,
        Userlist:[]
      };
    },
    components: {},
    created() {
      this.axios.get('/api/user/userdata').then(res => {
        this.Userlist=res.data
      })
    },
    methods: {
      handleDelete(index, row) {
        this.$confirm('确定删除该学生账户吗?删除后不可恢复!', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.axios.post('/api/user/deleteuser',row)
       .then(res => {
         if(res.data.length>0) {
           this.$message({
            type: 'success',
            message: '删除成功!'
          });
          setTimeout(() => {
          location.reload();
        }, 2000);
         }
       })
      }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消该操作！'
          });          
        });
      },


       /*修改课程提交*/
      handleChange(index, row){
        this.$confirm('确定修改该学生账户吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.axios.post('/api/user/changestuuser',row)
       .then(res => {
         if(res.data.length>0) {
           this.$message({
            type: 'success',
            message: '修改成功!'
          });
          setTimeout(() => {
          location.reload();
        }, 2000);
         }
       })
      }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消该操作！'
          });          
        });
    }
    },
  }
</script>
<style scoped>
.person{
  width: 420px;
  height: 80px;
  font-size: 12px;
  margin-top: 1rem;
  color: #999;
  line-height: 80px;
}
.person img{
  width: 80px;
  height: 80px;
}

</style>