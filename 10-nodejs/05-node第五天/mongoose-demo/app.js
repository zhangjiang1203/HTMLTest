var express = require('express')
var Query = require('./SQLOperation')
// var sql = require('mysql')
//
// //创建连接数据库
// var  connection = sql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'zhangjiang',
//     database:'baixiu'
// })
// //连接数据库
// connection.connect()

var app = express()

// server.on('request',function (req, res) {
//     console.log(req.url)
//     //查询数据
//     connection.query('select * from posts',function (err,result,fields) {
//         if (err) {
//             return res.end('404 Not Found')
//         }
//         var json = JSON.stringify(result)
//         // console.log(result)
//         res.end(json);
//     })
// })


//编写的一个json数据接口
app.get('/posts',function (req,res) {
    //查询数据
    // connection.query('select * from posts',function (err,result,fields) {
    //     res.setHeader('Content-Type','text/plain;charset=utf-8');
    //     if (err) {
    //         return res.end('404 Not Found')
    //     }
    //     var json = JSON.stringify(result)
    //     // console.log(result)
    //     res.end(json);
    // })

    //封装的sql查询语句
    Query('select * from users')
        .then(function (data) {
            console.log(data)
            res.setHeader('Content-Type','text/plain;charset=utf-8');
            var json = JSON.stringify(data)
            // console.log(result)
            res.end(json);
        })
})


app.listen(3000,function () {
    console.log('开始运行，浏览器访问127.0.0.1:3000')
})