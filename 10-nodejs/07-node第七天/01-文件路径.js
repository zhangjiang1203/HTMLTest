var fs = require('fs')
var path = require('path')

//拼接为一个绝对路径
// __dirname和__filename就是专门用来获取当前文件以及文件所属目录的绝对路径
var filePath = path.join(__dirname, './template.txt')

fs.readFile(filePath,function (err,data) {
    if (err) {
        throw err
    }
    console.log(err,data.toString())
})