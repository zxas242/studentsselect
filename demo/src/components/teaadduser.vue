<template>
<div id="addnewcourse">
  <p style="color:#333;font-weight:bold;padding:0.5rem 0.5rem;;">教师用户添加页：</p>
<el-form ref="form" :model="form" :rules='rules' label-width="100px">
  <el-form-item label="教师编号:" prop='id'>
    <el-input v-model="form.id"></el-input>
  </el-form-item>
    <el-form-item label="教师名称:" prop='name'>
    <el-input v-model="form.name"></el-input>
  </el-form-item>
    <el-form-item label="密码:" prop='pass'>
    <el-input v-model="form.pass"></el-input>
  </el-form-item>
    <el-form-item label="性别:" prop='sex'>
    <el-input v-model="form.sex"></el-input>
  </el-form-item>
    <el-form-item label="年龄:" prop='age'>
    <el-input v-model="form.age"></el-input>
  </el-form-item>
      <el-form-item label="电话:" prop='phone'>
    <el-input v-model="form.phone"></el-input>
  </el-form-item>
      <el-form-item label="授课课程编号:" prop='courseid'>
    <el-input v-model="form.courseid"></el-input>
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
          sex:'',
          age:'',
          phone:'',
          courseid:'',
          rank:'2'
        },
        rules:{
          id:[
            {required: true, message: '请输入教师编号', trigger: 'blur'},
            {min:2, message:'必须输入教师编号且长度大于2', trigger:'blur'}
          ],
          name:[
            {required: true, message: '请输入教师姓名', trigger: 'blur'},

          ],
          pass:[
            {required: true, message: '请输入密码', trigger: 'blur'},

          ],
          sex:[
            {required: true, message: '请输入性别', trigger: 'blur'},

          ],
          age:[
            {required: true, message: '请输入年龄', trigger: 'blur'},

          ],
          phone:[
            {required: true, message: '请输入电话', trigger: 'blur'},

          ],
          courseid:[
            {required: true, message: '请输教师授课编号', trigger: 'blur'}
            
          ],
        }
      }
    },
    methods: {
      onSubmit(formname) {
        this.$refs[formname].validate((valid)=>{
          if (valid) {
             this.axios.post('/api/user/teaadduser',this.form)
            .then(res => {
            if(res.data=="添加教师成功") {
              this.$message({
            showClose: true,
             message: '恭喜你，添加教师成功!',
             type: 'success'
          });
             }else 
           {
            alert("添加失败或编号不唯一!")
          }
        })
          }
        })

      },
      back(obj) {
          obj.id='',
          obj.name= '',
          obj.pass='',
          obj.sex='',
          obj.age='',
          obj.phone='',
          obj.courseid='',
          obj.rank='2'

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
