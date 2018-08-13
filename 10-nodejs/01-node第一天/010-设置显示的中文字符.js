var http = require('http');
var server = http.createServer();

server.on('request',function (req,res) {
    //设置响应格式
    //告诉浏览器用什么样的格式去编码
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.end('结束内容');

//    根据加载的路径直接返回对应的内容，也可以设置多个返回的header文件
})

server.listen(3000,function () {
    console.log('Server is running');
})