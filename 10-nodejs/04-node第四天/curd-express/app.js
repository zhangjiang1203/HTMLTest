var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var router = require('./router')

var app = express()
//配置body-parser
//只要加入这个配置，则在req请求对象上回多出来一个属性，body
//直接通过req.body属性去获取表单post请求体中的数据了
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// app.use(function (req, res) {
//     res.setHeader('Content-Type','text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body,null,2))
// })
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

//引入router 关联router内的路由信息，
router(app)

app.listen(3000,function () {
    console.log('开始运行,访问127.0.0.1:3000去访问')
})


// 添加第三方框架
// "art-template": "^4.12.2",
// "body-parser": "^1.18.3",
// "bootstrap": "^3.3.7",
// "express": "^4.16.3",
// "express-art-template": "^1.0.1"