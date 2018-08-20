var express = require('express')

var app = express()

//公开指定目录,加载指定的静态文件目录，可以直接在浏览器中直接访问
app.use('/public/',express.static('./public/'))


//根据每个路径返回对应的信息
//服务器收到get请求/的时候 ，执行回调处理函数
app.get('/',function (req,res) {
    res.send('hello world')

})

app.get('/about',function (req,res) {
    res.send('你好，about')
})




app.listen(3000,function () {
    console.log('服务开始运行了6666')
})