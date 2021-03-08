var express = require('express');
var router = express.Router();
/* 引入mysql */
var connection=require('./mysql')
/* 登陆接口 */
router.post('/userlogin', function(req, res) {
  let {id,pass}=req.body;
  connection.connect(() => {console.log("数据库连接成功")})
  console.log(req)
  if (req.body.radio==1) {
    console.log('管理员登录')
    connection.query(`SELECT * FROM admin WHERE id='${id}' and pass='${pass}';`,(err,data)=>{
      if(err) {
        throw err;
      }
      else{
        res.send(data);
        console.log('查询成功');
      }
    })
  }else if (req.body.radio==2) {
    console.log('教师登录')
    connection.query(`SELECT * FROM teacher WHERE id='${id}' and pass='${pass}';`,(err,data)=>{
      if(err) {
        throw err;
      }
      else{
        res.send(data);
        console.log('查询成功');
      }
    })
  }else{
    console.log('学生登录')
    connection.query(`SELECT * FROM student WHERE id='${id}' and pass='${pass}';`,(err,data)=>{
      if(err) {
        throw err;
      }
      else{
        res.send(data);
        console.log('查询成功');
        console.log(data);
      }
    })
  }
});

module.exports = router;
