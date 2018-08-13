//使用node创建一个web服务器

//1.加载http核心模块
var http = require('http');
//2.使用http.createServer()方法 创建一个web服务器
var server = http.createServer();

//3.服务器做的事
//发送请求，接收数据 处理请求 返回响应
//
server.on('request',function () {
    console.log('收到请求了');
})

//4.绑定端口号 启动服务器
server.listen(3000,function f() {
    console.log('服务器启动成功了，可以通过127.0.0.1:3000/来进行访问');
});