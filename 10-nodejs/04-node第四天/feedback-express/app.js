var express = require('express')
var bodyParser = require('body-parser')


var showData = [
    {
        name:'Jack1',
        address:'中国上海',
    },
    {
        name:'Jack2',
        address:'中国北京',
    },
    {
        name:'Jack3',
        address:'中国深圳',
    },
    {
        name:'Jack4',
        address:'中国广州',
    },
    {
        name:'Jack5',
        address:'中国信阳',
    },
]

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

app.use('/public/',express.static('public'))

//配置使用art-template模板引擎
//第一个参数表示当渲染以.art结尾的文件的时候，使用art-template模板引擎
//express-art-template 是专门用来在express中把art-template整合到express中
//html这个可以任意写 但是下面渲染的时候文件的后缀名要和这个一致
app.engine('html',require('express-art-template'))
//express为response相应对象提供了一个方法 render
//render方法默认是不可以使用的，但是如果配置了模板引擎就可以使用了
//res.render('html模板名称',{模板数据})
//第一个参数不能写路径，默认会去项目中的views目录查找该模板文件
//也就是说express有一个约定：开发人员把所有的视图文件都放到views目录中

//修改默认的views目录，第一个参数不是路径，而是一个特定的值
// app.set('views',render函数的默认路径)

app.get('/',function (req, res) {
    res.render('index.html',{
        comments:showData
    })
})

app.get('/post',function (req,res) {
    res.render('comments.html')
})

//以post请求/post 执行指定的处理函数
app.post('/publishcomment',function (req, res) {
    // console.log('收到表单的post请求',req)
    // req.query只能获取get请求传递过来的参数
    //获取请求体数据
    var comment = req.body
    showData.unshift(comment)
    //重新定向
    res.redirect('/')
    console.log(req.body)
    //处理参数
    //返回响应


})

app.get('/publishcomment',function (req,res) {
    var comment = req.query;
    showData.unshift(comment)
    //直接重定向
    res.redirect('/')
})

app.listen(3000,function () {
    console.log('开始运行')
})

//配置art-template
// 安装
// npm install --save art-template
// npm install --save express-art-template
//配置
// express有个中间件去获取post请求体数据,需要使用一个第三方包 body-parser
// 安装
// npm install --save body-parser
// 配置