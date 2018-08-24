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

//执行操作，就一个query方法执行所有的数据库操作
connection.query('SELECT * FROM `users`',function (err,result,fields) {
    if (err) {
        console.log(err)
    }else {

        console.log('The solution is: ',result[0])
    }

})
//关闭连接
connection.end()