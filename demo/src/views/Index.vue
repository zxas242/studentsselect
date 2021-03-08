<template>
<div>
   <span @click="gonggao()" class="gonggao"> 公告</span>
   <span @click="quit" class="exit el-icon-setting"> 退出系统</span>
    <div class="header">
          <el-tooltip class="item" effect="dark" content="点击查看个人信息" placement="top">
            <span @click="Goprofile()" class="name el-icon-user"> {{name}}</span>
          </el-tooltip></div>
  <div id="index">
    <div class="title">欢迎来到学生选课系统！ </div>
<el-row class="tac box">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#48494e"
      text-color="#fff"
      active-text-color="skyblue">
      <!-- 个人资料 -->
        <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span class="dh_title">个人资料</span>
        </template>
          <el-menu-item index="1-1" @click.native="Gocoursed()" v-show="showstu">已选课程</el-menu-item>
          <el-menu-item index="1-2" @click.native="Goprofile()">个人信息</el-menu-item>
          <el-menu-item index="1-3" @click.native="Goteastu()" v-show="showtea">已选课的学生</el-menu-item>
          </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span class="dh_title">选修课程选择</span>
        </template>
          <el-menu-item index="2-1" @click.native="GoxxCourse()">学生可选课程</el-menu-item>
          </el-submenu>
              <el-submenu v-if="ShowFlag" index="3">
              <template slot="title">
                <i class="el-icon-lock"></i>
                <span class="dh_title">账号管理</span>
              </template>
                <el-menu-item index="3-2" @click.native="StumanageUsers()">学生账号管理</el-menu-item>
                <el-menu-item index="3-3" @click.native="TeamanageUsers()">教师账号管理</el-menu-item>
                <el-menu-item index="3-4" @click.native="stuadduser()">学生账号添加</el-menu-item>
                <el-menu-item index="3-5" @click.native="teaadduser()">教师账号添加</el-menu-item>
                </el-submenu>
       <el-submenu v-if="ShowFlag" index="4">
        <template slot="title">
          <i class="el-icon-lock"></i>
          <span class="dh_title">新增选修课程</span>
        </template>
          <el-menu-item index="4-2" @click.native="GonewManage()">添加课程</el-menu-item>
          </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</div>
</div>
</template>
<script>
export default {
    name:"index",
    data() {
      return {
        name:'',
        visible: false,
      }
    },
     methods: {
      quit() {
         this.$confirm('确定退出选课系统吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.replace('/login');
          localStorage.clear();
        })         
      },
      Goprofile() {
        this.$router.push('/profile');
      },
      GoxxCourse() {
        this.$router.push('/xxcourse');
      },
      Gocoursed() {
        this.$router.push('/coursed');
      },
      GoaddUser() {
        this.$router.push('/addnewuser');
      },
      StumanageUsers() {
        this.$router.push('/manageusers');
      },
      TeamanageUsers() {
        this.$router.push('/TeamanageUsers');
      },
      GonewManage() {
        this.$router.push("/index");
      },
      gonggao(){
        this.$router.replace('/introduce');
      },
       stuadduser(){
        this.$router.replace('/stuadduser');
      },
       teaadduser(){
        this.$router.replace('/teaadduser');
      },
       Goteastu(){
        this.$router.replace('/Goteastu');
      },
    },
     created() {
      this.name=window.localStorage.getItem('name');
     },
      computed:{
      ShowFlag() {
        if(localStorage.getItem("rank")==1){
          return true;
        }else {
          return false;
        }
      },
      showstu(){
        if(localStorage.getItem("rank")==3){
          return true;
        }else {
          return false;
        }
      },
      showtea(){
         if(localStorage.getItem("rank")==2){
          return true;
        }else {
          return false;
        }
      },
}
}
</script>
<style scoped>
.box{
    width: 201%!important;    
    position: absolute;
    height: 100%;
    padding-top: 1.5rem;
}
.manage{
  position: absolute;
  right: 1rem;  color: white;top:1.5rem;
  font-size: 12px;
  text-decoration: none;
}
#index{
max-width: 250px;
min-width: 220px;
background: #48494e;
position: absolute;
height: 100%;
}
.title {
    font-weight: bold;
    position: absolute;
    font-size: 16px;
    top: -2rem;
    left: 1.5rem;
    animation: trigger 3s alternate infinite;
    color: rgb(65, 141, 241);
}
.name{
  cursor: pointer;
}
.header {
  height: 50px;background: #48494e;
  width: 100%;
  text-align: center;
}
.header span{
  color: white;
  position: absolute;
  left: 250px;
  top: 25px;
  font-size: 12px;
}
@keyframes trigger{
    0%{
        animation-delay: .4s;
        transform: scale(1);
    }
    33%{
        animation-delay: .6s;
        transform: scale(.8);
    }
    66%{
        animation-delay: .8s;
        transform: scale(1);
    }
    100%{
        animation-delay: 2s;
        transform: scale(.8);
    }
}
.exit{
    position: absolute;
    top: 25px;
    font-size: 12px;
    color: white;cursor: pointer;
    border: 0;
    right: 7rem;
}
.exit:hover,.manage:hover{
  transition: all 1s;
  color: rgb(65, 141, 241);
  font-size: 15px;
}
.dh_title{
  color: #ccc;
  font-size: 12px;
}
.gonggao{
    width: 50px;
    height: 23px;
    text-align: center;
    position: absolute;
    top: 17px;
    font-size: 15px;
    color: white;cursor: pointer;
    border:2px solid rgb(65, 141, 241);
    border-radius:25px;
    
    right: 13rem;
}
</style>