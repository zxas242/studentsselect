<template>
    <div class="user">
          <div>
      <el-avatar :size="100" 
      class='icon'
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
      </el-avatar>
    </div>
    <div  v-show='rank=="系统管理员"'>
      <div class="username"><label for="">编号:</label>{{id}}</div>
      <div class="name"><label for="">姓名:</label>{{name}}</div>
      <div class="username"><label for="">权限:</label>{{rank}}</div>
    </div>

    <div  v-show='rank=="教师"'>
      <div class="username"><label for="">编号:</label>{{id}}</div>
      <div class="name"><label for="">姓名:</label>{{name}}</div>
      <div class="username"><label for="">性别:</label>{{sex}}</div>
      <div class="username"><label for="">年龄:</label>{{age}}</div>

      <div class="username"><label for="">电话:</label>{{phone}}</div>
      <div class="username"><label for="">授课编号:</label>{{courseid}}</div>
    
      <div class="username"><label for="">权限:</label>{{rank}}</div>
    </div>

    <div  v-show='rank=="学生"'>
      <div class="username"><label for="">编号:</label>{{id}}</div>
      <div class="name"><label for="">姓名:</label>{{name}}</div>
      <div class="username" ><label for="">班级:</label>{{clas}}</div>
      <div class="username"><label for="">学院:</label>{{department}}</div>
      <div class="username"><label for="">性别:</label>{{sex}}</div>
      <div class="username"><label for="">年龄:</label>{{age}}</div>

      <div class="username"><label for="">专业:</label>{{profession}}</div>
      <div class="username"><label for="">地址:</label>{{address}}</div>
    
      <div class="username"><label for="">权限:</label>{{rank}}</div>
    </div>
    </div>
</template>
<script>
export default {
    name:'profile',
    data() {
        return {
          radio:'',
            name:"",
            id:'',
            clas:'',
            department:'',
            sex:'',
            age:'',
            profession:'',
            address:'',
            credit:'',
            rank:'',
            phone:'',
            courseid:''
      }
    },
    created(){
      this.name=localStorage.getItem('name');
      this.id=localStorage.getItem('id');
      if(localStorage.getItem('class')=='undefined'){
        this.clas='未填写'
      }else{
        this.clas=localStorage.getItem('class')
      }
      if(localStorage.getItem('department')=='undefined'){
        this.department='未填写'
      }else{
        this.department=localStorage.getItem('department')
      }
      if(localStorage.getItem('sex')=='undefined'){
        this.sex='未填写'
      }else{
        this.sex=localStorage.getItem('sex')
      }
      if(localStorage.getItem('age')=='undefined'){
        this.age='未填写'
      }else{
        this.age=localStorage.getItem('age')
      }
      if(localStorage.getItem('profession')=='undefined'){
        this.profession='未填写'
      }else{
        this.profession=localStorage.getItem('profession')
      }
      if(localStorage.getItem('address')=='undefined'){
        this.address='未填写'
      }else{
        this.address=localStorage.getItem('address')
      }
      if(localStorage.getItem('credit')=='undefined'){
        this.credit='未填写'
      }else{
        this.credit=localStorage.getItem('credit')
      }
      if(localStorage.getItem('phone')=='undefined'){
        this.phone='未填写'
      }else{
        this.phone=localStorage.getItem('phone')
      }
      if(localStorage.getItem('courseid')=='undefined'){
        this.courseid='未填写'
      }else{
        this.courseid=localStorage.getItem('courseid')
      }
       if(localStorage.getItem('rank')=='1'){
        this.rank='系统管理员'
      }else if(localStorage.getItem('rank')=='2'){
        this.rank='教师'
      }else{
        this.rank='学生'
      }
    }
}
</script>
<style scoped>
.user{
  display:flex;
  flex:1;
  align-items:center;
  padding-top: 2rem;
}
.user div{
  height: 30px;
  padding:0 2em;
}
.user label{
  color:#999;
  padding-right: 2em;
  font-size: 13px;
}
.load{
    margin-top: 1rem;
    margin-left: -1.5rem;
}
</style>