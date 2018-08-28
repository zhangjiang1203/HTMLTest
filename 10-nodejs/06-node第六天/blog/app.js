var express = require('express')
var prase = require('body-parser')
var routers = require('./routers')

var path = require('path')

var app = express()
//设置公开的目录,这种写法是相对目录
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

// console.log(path.join(__dirname,'./public/'))

//相对路径就是执行node程序相对的路径
//文件的操作路径要使用动态的绝对路径

//这种写法会变成绝对目录
app.use('/public/',express.static(path.join(__dirname,'./public/')))
app.use('/views/',express.static(path.join(__dirname,'./views/')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_moudles/')))

//只要加入这个配置，则在req请求对象上回多出来一个属性，body
//直接通过req.body属性去获取表单post请求体中的数据了
app.use(prase.urlencoded({extended:false}))
app.use(prase.json())

//设置默认显示的界面
// app.set('views',path.join(__dirname,'/views/'))

//设置渲染的模板类型
app.engine('html',require('express-art-template'))


//设置路由
app.use(routers)

app.get('/',function (req, res) {

    console.log(req.url);
    res.render('index.html',{
        name:'李四'
    })

    // res.end('hello')
})

app.listen(3000,function () {
    console.log('开始运行，访问地址:127.0.0.1:3000')
})