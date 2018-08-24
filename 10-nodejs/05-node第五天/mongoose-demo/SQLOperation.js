const mysql = require('mysql')

//设置服务器的基本显示信息
var pool = mysql.createPool({
    connectionLimit   : 50,
    host              : "localhost",
    user              : "root",
    password          : "zhangjiang",
    database          : 'baixiu',
    multipleStatements: true //是否允许执行多条语句
})


//将结果对象返回
var Query = function (sql,params) {

    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                return reject(err)
            }
            connection.query(sql,params,function (err, result) {
                connection.release()
                if (err) {
                    return reject(err)
                }
                resolve(result)
            })
        })
    })
}

module.exports = Query