var fs = require('fs')
var template = require('art-template')
var http = require('http');
var url = require('url')


var rootPath = 'views/'


var server = http.createServer();
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

server.on('request',function (req,res) {
    // res.setHeader('Content-Type','text/plain;charset=utf-8')
    var parseObj = url.parse(req.url,true);
    //单独获取不包含查询字符串的路径部分
    var pathname = parseObj.pathname;
    if (pathname === '/') {
        fs.readFile(rootPath + 'index.html',function (error, data) {
            if (error == null){
                var ret = template.render(data.toString(),{
                    comments:showData,
                })
                res.end(ret)
                return
            }
            res.end('404,页面失联了')
        })
    } else if ( pathname == '/publishcomment') {
        //获取添加评论的数据
        console.log(parseObj.query)
        //json格式化字符串
        console.log(JSON.stringify(parseObj.query))
        //数组中添加数据，对应的数据字段要对应的上，
        //用户重定向跳转到首页，
        showData.push(parseObj.query)
        //表单提交重定向,通过服务器让客户端重定向
        // 1.设置状态码为302 临时重定向 statusCode
        // 2.设置状态码为301 永久重定向 浏览器会记住
        res.statusCode = 302
        // 3.响应头中通过设置Location告诉客户端往哪个重定向 '/' 就是表示根路径
        // 客户端发现收到服务器的响应状态码是302，就会自动去响应头中找Location，进行重定位
        res.setHeader('Location','/')
        res.end()
    } else {
        fs.readFile(rootPath+ pathname,function (error, data) {
            if (error == null){
                res.end(data.toString())
                return
            }
            res.end('404,页面失联了')
        })
    }

}).listen(3000,function () {
    console.log('服务器启动成功了，可以通过127.0.0.1:3000/来进行访问');
})
