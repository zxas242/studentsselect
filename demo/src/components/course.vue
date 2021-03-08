<template>
<div id="addnewcourse">
  <p style="color:#333;font-weight:bold;padding:0.5rem 0.5rem;;">选修课程添加页：</p>
<el-form ref="form" :model="form" :rules='rules' label-width="100px">
  <el-form-item label="课程编号:" prop='courseid'>
    <el-input v-model="form.courseid"></el-input>
  </el-form-item>

    <el-form-item label="课程名称:" prop='cname'>
    <el-input v-model="form.cname"></el-input>
  </el-form-item>

    <el-form-item label="学时:" prop='classhours'>
    <el-input v-model="form.classhours"></el-input>
  </el-form-item>

  <el-form-item label="学分设置:">
    <el-radio-group v-model="form.credit">
      <el-radio label="1" name="type"></el-radio>
      <el-radio label="2" name="type"></el-radio>
      <el-radio label="3" name="type"></el-radio>
      <el-radio label="4" name="type"></el-radio>
      <el-radio label="5" name="type"></el-radio>
      <el-radio label="6" name="type"></el-radio>

    </el-radio-group>
  </el-form-item>

    <el-form-item label="考试方式:" prop='testway'>
    <el-input v-model="form.testway"></el-input>
  </el-form-item>

    <el-form-item label="课程性质:" prop='property'>
    <el-input v-model="form.property"></el-input>
  </el-form-item>
      <el-form-item label="课程介绍:" prop='Introduction'>
    <el-input type="textarea" v-model="form.Introduction"></el-input>
  </el-form-item>
      <el-form-item label="授课老师:" prop='teacher'>
    <el-input v-model="form.teacher"></el-input>
  </el-form-item>
    <el-form-item label="授课时间:" prop='time'>
    <el-input v-model="form.time"></el-input>
  </el-form-item>


  <el-form-item label="是否可选:">
    <el-switch v-model="form.opt"></el-switch>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit('form')">立即添加</el-button>
    <el-button @click="back(form)">取消</el-button>
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
          courseid:'',
          cname: '',
          classhours:'',
          credit:'',
          testway:'',
          property:'',
          Introduction:'',
          teacher:'',
          time:'',
          opt:'true',

        },
        rules:{
          courseid:[
            {required: true, message: '请输入课程编号', trigger: 'blur'},

          ],
          cname:[
            {required: true, message: '请输入课程名称', trigger: 'blur'},

          ],
          classhours:[
            {required: true, message: '请输入学时', trigger: 'blur'},

          ],
          testway:[
            {required: true, message: '请输入考试方式', trigger: 'blur'},

          ],
          Introduction:[
            {required: true, message: '请输入课程介绍', trigger: 'blur'},

          ],
          property:[
            {required: true, message: '请输入课程性质', trigger: 'blur'},

          ],
          teacher:[
            {required: true, message: '请输教师名称', trigger: 'blur'},
            {min:2, message:'必须输入名字且长度大于2', trigger:'blur'}
          ],
          time:[
            {required: true, message: '请输入课程开始截止时间', trigger: 'blur'}
          ],

        }
      }
    },
    methods: {
      onSubmit(formname) {
        this.$refs[formname].validate((valid)=>{
          if (valid) {
             this.axios.post('/api/course/addnewcourse',this.form)
            .then(res => {
            if(res.data=="添加成功") {
              this.$message({
            showClose: true,
             message: '恭喜你，添加成功!',
             type: 'success'
          });
             }else 
           {
            alert("添加失败!")
          }
        })
          }
        })

      },
      back(obj) {
          obj.courseid='',
          obj.cname= '',
          obj.classhours='',
          obj.credit='',
          obj.testway='',
          obj.property='',
          obj.Introduction='',
          obj.teacher='',
          obj.time='',
          obj.opt=''


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
