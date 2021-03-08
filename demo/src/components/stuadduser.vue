<template>
<div id="addnewcourse">
  <p style="color:#333;font-weight:bold;padding:0.5rem 0.5rem;;">学生用户添加页：</p>
<el-form ref="form" :model="form" :rules='rules' label-width="100px">
  <el-form-item label="学生编号:" prop='id'>
    <el-input v-model="form.id"></el-input>
  </el-form-item>

    <el-form-item label="学生姓名:" prop='name'>
    <el-input v-model="form.name"></el-input>
  </el-form-item>

    <el-form-item label="密码:" prop='pass'>
    <el-input v-model="form.pass"></el-input>
  </el-form-item>


    <el-form-item label="所在班级:" prop='clas'>
    <el-input v-model="form.clas"></el-input>
  </el-form-item>

    <el-form-item label="所属院系:" prop='department'>
    <el-input v-model="form.department"></el-input>
  </el-form-item>
      <el-form-item label="性别:" prop='sex'>
    <el-input  v-model="form.sex"></el-input>
  </el-form-item>
      <el-form-item label="年龄:" prop='age'>
    <el-input v-model="form.age"></el-input>
  </el-form-item>
    <el-form-item label="专业:" prop='profession'>
    <el-input v-model="form.profession"></el-input>
  </el-form-item>

    <el-form-item label="地址:" prop='address'>
    <el-input type="textarea" v-model="form.address"></el-input>
  </el-form-item>

    <el-form-item label="已修学分:" prop='credit'>
    <el-input v-model="form.credit"></el-input>
  </el-form-item>



  <el-form-item>
    <el-button type="primary" @click="onSubmit('form')">立即添加</el-button>
    <el-button @click="back(form)">重置表格</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
  export default {
    name:"addnewcourse",
    data() {
      return {
        form: {
          id:'',
          name: '',
          pass:'',
          clas:'',
          department:'',
          sex:'',
          age:'',
          profession:'',
          address:'',
          credit:'',
          rank:'3'
        },
        rules:{
          id:[
            {required: true, message: '请输入学生编号', trigger: 'blur'},

          ],
          name:[
            {required: true, message: '请输入学生姓名', trigger: 'blur'},

          ],
          pass:[
            {required: true, message: '请输入密码', trigger: 'blur'},

          ],
          clas:[
            {required: true, message: '请输入班级', trigger: 'blur'},

          ],
          department:[
            {required: true, message: '请输入所属院系', trigger: 'blur'},

          ],
          sex:[
            {required: true, message: '请输入性别', trigger: 'blur'},

          ],
          age:[
            {required: true, message: '请输入年龄', trigger: 'blur'},
          ],
          profession:[
            {required: true, message: '请输入专业', trigger: 'blur'}
          ],
          credit:[
            {required: true, message: '请输入已修学分', trigger: 'blur'}
          ],

        }
      }
    },
    methods: {
      onSubmit(formname) {
        this.$refs[formname].validate((valid)=>{
          if (valid) {
             this.axios.post('/api/user/stuadduser',this.form)
            .then(res => {
            if(res.data=="添加学生成功") {
              this.$message({
            showClose: true,
             message: '恭喜你，添加学生成功!',
             type: 'success'
          });
             }else 
           {
            alert("添加失败或编号不唯一!!")
          }
        })
          }
        })

      },
      back(obj) {
          obj.id='',
          obj.name= '',
          obj.pass='',
          obj.clas='',
          obj.department='',
          obj.sex='',
          obj.age='',
          obj.profession='',
          obj.address='',
          obj.credit=''
          obj.rank='3'
      }
    }
  }
</script>
<style scoped>
#addnewcourse{
  position: relative;
  width: 700px;
  top: 1rem;
  padding: 0rem 0rem;
}
</style>
