var http = require('http')

//解析url
var  url = require('url')


//引入中间件
var cookies = require('./middlewares/cookies')
var postBody = require('./middlewares/post-body')
var queryURL = require('./middlewares/query')
var session = require('./middlewares/session')

var server = http.createServer(function (req,res) {

    //解析get post
    var urlobj = url.parse(req.url,true)
    req.query = urlobj.query

    //同时自己需要去解析post cookies session等参数
    cookies(req,res)
    postBody(req,res)
    queryURL(req,res)
    session(req,res)

    //配置模板引擎
    res.render = function () {

    }

    //原生的都要自己去解析对应的参数信息


    //添加的中间件就是用来处理

})

// 另一种方式
// var server = http.createServer()
// server.on('request',function (req,res) {
//
// })
server.listen(3000,function () {
    console.log('开始运行')
})