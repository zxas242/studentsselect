<template>
  <div class="manageuser">
   <div class="person">
      <span style="font-size:18px;padding-right:1rem;">详情:</span>教师用户总数: 
      <span style="color:red;margin:0 5px;font-size:18px;">{{Userlist.length}}</span>人，
      管理员用户: <span style="color:red;margin:5px 0;font-size:18px;">1</span>人.
   </div>
    <el-table stripe='true'
    :data="Userlist" style="width: 90%;margin-top:1rem;font-size:13px;color:skyblue;">

    <el-table-column label="教师编号" prop="id"></el-table-column>
    <el-table-column label="名字" prop="name">
         <template slot-scope="scope">
             <el-input placeholder="请输入内容" v-show="!falg" v-model="scope.row.name" autosize type="textarea"></el-input>
                <span v-show="falg">{{scope.row.name}}</span>
                </template>
    </el-table-column>

    <el-table-column label="密码" prop="pass">
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
    <el-table-column label="电话" prop="phone">
          <template slot-scope="scope">
             <el-input placeholder="请输入内容" v-show="!falg" v-model="scope.row.phone" autosize type="textarea"></el-input>
                <span v-show="falg">{{scope.row.phone}}</span>
                </template>
    </el-table-column>
    <el-table-column label="科目" prop="courseid">
          <template slot-scope="scope">
             <el-input placeholder="请输入内容" v-show="!falg" v-model="scope.row.courseid" autosize type="textarea"></el-input>
                <span v-show="falg">{{scope.row.courseid}}</span>
                </template>
    </el-table-column>

    <el-table-column align="right" label="操作"  width="200">
      <template slot-scope="scope">
        
        <el-button @click="falg=!falg"  size="mini">编辑</el-button>
        <el-button @click="handleChange(scope.$index, scope.row)" v-show="!falg" size="mini" type="success">提交</el-button>

        <el-button  v-show="falg" size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
        Userlist:[],
      };
    },
    components: {},
    created() {
      this.axios.get('/api/user/userdataT').then(res => {
        this.Userlist=res.data
      })
    },
    methods: {

      handleDelete(index, row) {
        this.$confirm('确定删除该教师账户吗?删除后不可恢复!', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.axios.post('/api/user/deleteuserT',row)
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
        this.$confirm('确定修改该教师账户吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.axios.post('/api/user/changeteauser',row)
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
  }
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