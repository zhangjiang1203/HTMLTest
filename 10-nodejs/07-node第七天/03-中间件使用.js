var express = require('express')
var app = express()

//开始配置文件，使用中间件
//中间件就是处理请求，本质就是个函数
//express中，对中间件的几种分类，不关心请求路径和请求方法的中间件，任何请求都会进入这个中间件
// request 请求对象
// response 响应对象
// next 下一个响应对象 调用next才会响应下一个中间件，否则会一直停留在这里
app.use(function (req,res,next) {
    console.log(1)
    next()
})

app.use(function (req,res,next) {
    console.log(2)
    next()
})

app.get('/',function (req, res, next) {
    //这个里面异步出现错误的时候才去处理对应错误 直接next(err)
    // if (err){
    //     调用next的时候，如果传递了参数，则直接往后查找带有四个参数的应用程序级别中间件
    //     return next(err)
    // }
})

//处理请求错误处理
app.use(function (err,req,res,next) {
    console.log('app error handler')
    res.status(500).send(err.message)
})

app.listen(3000,function () {

})

//中间件的作用就是把用户从请求到响应的整个过程分发到多个中间件中去处理，提高代码的灵活性、动态可拓展性