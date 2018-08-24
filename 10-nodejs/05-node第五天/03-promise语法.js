//Promise 是EcmaScript 6语法中的一个API
//Promise 就是一个构造器

var fs = require('fs')

//创建一个Promise
//一旦创建 就开始执行里面的代码,promise内部往往都是封装的异步任务
//resolve
//reject
var p1 = new Promise(function (resolve,reject) {
    fs.readFile('./02-find和findIndex.js',function (err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data.toString())
        }
    })
})


var p2 = new Promise(function (resolve,reject) {
    fs.readFile('./showdata.json',function (err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data.toString())
        }
    })
})

//p1 就是一个承诺 成功了之后做指定的操作
// then方法接收的第一个function就是容器中的resolve函数
// 第二个function就是容器中的reject函数
// then 方法可以继续调用 then这个方法，第一个then返回什么，第二个then函数中接收到的就是什么
// 可以是一个函数 一个字符串 一个数值

p1.then(function (data) {
    console.log(data)
    //返回一个Promise对象
    return p2
},function (err) {
    console.log('文件读取失败',err)
}).then(function (data) {
    //这边接收到的也是Promise对象,在这个里面还可以继续返回值，后面再跟then函数，是一个链式编程
    console.log(data)

})