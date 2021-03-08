const express = require('express')
const router = express.Router()
/* 引入数据库实例 */
const connection = require('./mysql')
/* 获取学生账号密码 */
router.get('/userdata',(req,res) => {
    connection.connect(()=>{
        console.log('数据库已连接!');
    })
    connection.query(`SELECT * FROM student;`,(err,data) => {
        if(!err) {
            res.send(data)
        }else {
            throw err;
        }
    })
});
/* 删除学生用户 */
router.post('/deleteuser',(req,res) => {
    const {id,name}=req.body;
    console.log(req.body)
    connection.connect(()=>{
        console.log('数据库已连接!');
    })
    connection.query(`DELETE FROM student WHERE name='${name}' and id='${id}';`,(err) => {
        if(!err) {
            /* 删除对应的学生表 */
                    res.send("删除成功");

        }else {
            throw err;
        }
    })
});

/* 修改学生用户 */
router.post('/changestuuser',(req,res) => {
    const {id,name,pass,department,sex,age,profession,address,credit}=req.body;
    const clas=req.body.class
    console.log(req.body)
    connection.connect(()=>{
        console.log('数据库已连接!');
        //console.log(req.body);
    })
    connection.query(`UPDATE student SET name='${name}',pass='${pass}',sex='${sex}',age='${age}',class='${clas}',department='${department}',profession='${profession}',address='${address}',credit='${credit}'  where id='${id}';`,(err,data) => {
        if(!err) {
            connection.query(`UPDATE choice SET name='${name}' where id='${id}';`,(err,data) => {
                if(!err) {
                    console.log(data);
                    res.send("修改成功");
                }})

        }else {
            throw err;
        }
    })
});


/* 获取教师账号密码 */
router.get('/userdataT',(req,res) => {
    connection.connect(()=>{
        console.log('数据库已连接!');
    })
    connection.query(`SELECT * FROM teacher;`,(err,data) => {
        if(!err) {
            res.send(data)
        }else {
            throw err;
        }
    })
});
/* 删除教师用户 */
router.post('/deleteuserT',(req,res) => {
    const {id,name}=req.body;
    console.log(req.body)
    connection.connect(()=>{
        console.log('数据库已连接!');
    })
    connection.query(`DELETE FROM teacher WHERE name='${name}' and id='${id}';`,(err) => {
        if(!err) {
                    res.send("删除成功");
        }else {
            throw err;
        }
    })
});

/* 修改教师用户 */
router.post('/changeteauser',(req,res) => {
    const {id,name,pass,sex,age,phone,courseid}=req.body;
    console.log(req.body)
    connection.connect(()=>{
        console.log('数据库已连接!');
    })
    connection.query(`UPDATE teacher SET name='${name}',pass='${pass}',sex='${sex}',age='${age}',phone='${phone}',courseid='${courseid}' where id='${id}';`,(err,data) => {
        if(!err) {
            connection.query(`UPDATE choice SET teacher='${name}' where id='${id}';`,(err,data) => {
                if(!err) {
                    console.log(data);
                    res.send("修改成功");
                }})

        }else {
            throw err;
        }
    })
});

/* 添加学生用户 */
router.post('/stuadduser',(req,res) => {
    const {id,name,pass,clas,department,sex,age,profession,address,credit,rank}=req.body;
    console.log(req.body)
    connection.connect(()=>{
        console.log('数据库已连接!');
    })

    connection.query(`select * from student where id='${id}';`,(err,data) => {
        if (data.length>=1) {
            res.send("添加学生失败");
        }else{
            connection.query(`INSERT INTO student VALUES('${id}','${name}','${pass}','${clas}','${department}','${sex}','${age}','${profession}','${address}','${credit}','${rank}');`,(err) => {
                if(!err) {
                    res.send("添加学生成功");
                }else {
                    throw err;
                }
            })
        }
        })


});

/* 添加教师用户 */
router.post('/teaadduser',(req,res) => {
    const {id,pass,name,sex,age,phone,courseid,rank}=req.body;
    console.log(req.body)
    connection.connect(()=>{
        console.log('数据库已连接!');
    })

    connection.query(`select * from teacher where id='${id}';`,(err,data) => {
        if (data.length>=1) {
            res.send("添加教师失败");

        }else{
            connection.query(`INSERT INTO teacher VALUES('${id}','${pass}','${name}','${sex}','${age}','${phone}','${courseid}','${rank}');`,(err) => {
                if(!err) {
                    res.send("添加教师成功");
                }else {
                    throw err;
                }
            })
        }
        })


});

module.exports = router;
