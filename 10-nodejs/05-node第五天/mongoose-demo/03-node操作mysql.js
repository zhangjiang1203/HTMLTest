var sql = require('mysql')
//创建连接数据库
var  connection = sql.createConnection({
    host:'localhost',
    user:'root',
    password:'zhangjiang',
    database:'baixiu'
})

//连接数据库
connection.connect()

//执行操作
connection.query('SELECT * FROM `users`',function (err,result,fields) {
    if (err) {
        console.log(err)
    }else {

        console.log('The solution is: ',result)
    }

})
//关闭连接
connection.end()