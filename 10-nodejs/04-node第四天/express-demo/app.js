var express = require('express')
//创建app
var app = express()

//当以/public/开头的时候去 ./public/目录去找对应的文件
//127.0.0.1/public/login.html
// app.use('/public/',express.static('./public/'))
//当省略第一个参数的时候，去掉./public的方式进行访问，直接写路径去访问
//127.0.0.1/login.html
app.use(express.static('./public/'))
// /a/表示public的一个别名 127.0.0.1/a/login.html
app.use('/a/',express.static('./public/'))


app.get('/',function (req,res) {
    res.send('我就是根目录')
})

app.get('/login',function (req,res) {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <h1>欢迎登陆</h1>
    </body>
    </html>
    `)
})

app.post('/',function (req, res) {
    res.send('这就是一个post请求')
})

app.listen(3000,function () {
    console.log('开始启动了，访问端口127.0.0.1:3000')
})

//修改完代码 服务器自动重启 第三方工具nodemon
// npm install --global nodemon
// 安装完毕之后使用nodemon app.js 启动
// 当文件变化的时候自动重启服务器
