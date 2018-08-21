 var fs = require('fs')

 //所有的文件操作都是异步的操作
 //文件的相对路径可以省略./
 fs.readFile('data/template.txt',function (err, data) {
     if (err) {
         return console.log(err)
     }
     console.log(data.toString())
 })


 //模块加载中 相对路径中的 ./ 不能省略

 require('./data/foo')