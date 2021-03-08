var express = require('express');
var router = express.Router();
/* 引入sql */
var connection=require('./mysql')
/* 查询所有课程 */
router.get('/getxxcoursedata', function(req, res) {
  connection.connect(() => {
    console.log("数据库连接成功");
    

  })
  connection.query(`SELECT * FROM course;`,(err,data)=>{
    if(err) {
      throw err;
    }
    else{
      res.send(data);
      console.log('数据调出成功');
    }
  })
});

/* 查询所有已选课的学生 */
router.get('/getgoteastu', function(req, res) {
  connection.connect(() => {
    console.log("数据库连接成功");
    

  })
  connection.query(`SELECT * FROM choice;`,(err,data)=>{
    if(err) {
      throw err;
    }
    else{
      res.send(data);
      console.log('数据调出成功');
    }
  })
});

/* 根据前台传参查询不同的数据表 */
router.get(`/getcoursedata`, function(req, res) {
 
  connection.connect(() => {
    console.log("数据库连接成功");
  })
  connection.query(`SELECT * FROM  choice where id=${req.query.id};`,(err,data)=>{
    if(err) {
      throw err;
    }
    else{
      res.send(data);
      console.log('数据调出成功')
    }
  })
});
/* 添加学生个人课程 */
router.post('/addcourse',function(req,res){
    let {courseid,cname,classhours,credit,testway,property,Introduction,teacher,time,name,id,opt}=req.body;
    connection.connect(()=>{
        console.log('数据库已经连接..')
    })
    connection.query(`SELECT * FROM  course WHERE courseid='${courseid}' and opt='${opt}';`,(err,data)=>{
      if(err) {
        throw err;
      }
      else{
          let data1=data
        connection.query(`SELECT * FROM  choice WHERE courseid='${courseid}' and id='${id}';`,(err,data) => {
          if (data.length>=1) {
            //onsole.log(data)
            res.send("您已经添加了该课程或该课程不可操作!");
          }else{
            console.log(data1)
            if(opt=='true' && data1.length==1){
              connection.query(`INSERT INTO choice VALUES('${courseid}','${cname}','${classhours}','${credit}','${testway}','${property}','${Introduction}','${teacher}','${time}','${name}','${id}','false');`,(err,data) => {
                if(!err) {
                    res.send("添加成功");
                   // console.log(data)
                }else{
                    throw err;
                }
            })
            }else{
              res.send("您已经添加了该课程或该课程不可操作!");
            }
          }
         // console.log(data.length)
        })
       }
    })
    
});
/* 添加公共课程 */
router.post('/addnewcourse',function(req,res){
  let {courseid,cname,classhours,credit,testway,property,Introduction,teacher,time,opt}=req.body;
  connection.connect(()=>{
      console.log('数据库已经连接..')
      console.log(req.body)
  })
  connection.query(`INSERT INTO course VALUES('${courseid}','${cname}','${classhours}','${credit}','${testway}','${property}','${Introduction}','${teacher}','${time}','${opt}');`,(err,data) => {
      if(!err) {
          res.send("添加成功");
      }else{
          res.send("-999");
          throw err;
      }
  })
})
/* 删除个人课程 */
router.post('/delcourse',(req,res) => {
  const {courseid} = req.body;
  connection.connect(() => {
    console.log('连接删除数据库..')
  })
  connection.query(`DELETE FROM  choice where courseid=${courseid} ;`,(err,data) => {
    if(!err) {
      res.send("删除成功"+data);
    }else {
      throw err;
    }
  })
});
/* 删除公共课程 */
router.post('/deletecourse',(req,res) => {
  const {courseid} = req.body;
  connection.connect(() => {
    console.log('连接数据库..')
  })
  connection.query(`DELETE FROM course WHERE courseid='${courseid}';`,(err,data) => {
    if(!err) {
      res.send("删除成功"+data);
    }else {
      throw err;
    }
  })
});
/* 修改公共课程 */
router.post('/changecourse',(req,res) => {
  const {courseid,cname,classhours,credit,testway,property,Introduction,teacher,time,opt}=req.body;
  console.log(req.body)
  connection.connect(()=>{
      console.log('数据库已连接!');
  })
  connection.query(`UPDATE course SET courseid='${courseid}',cname='${cname}',classhours='${classhours}',credit='${credit}',testway='${testway}',property='${property}',Introduction='${Introduction}',teacher='${teacher}',time='${time}',opt='${opt}' where courseid='${courseid}';`,(err) => {
      if(!err) {
        connection.query(`UPDATE choice SET cname='${cname}',classhours='${classhours}',credit='${credit}',testway='${testway}',property='${property}',Introduction='${Introduction}',teacher='${teacher}',time='${time}' where courseid='${courseid}';`,(err,data) => {
          if(!err) {
              console.log(data);
              res.send("课程修改成功");
          }})
          

      }else {
          throw err;
      }
  })
});
module.exports = router;
