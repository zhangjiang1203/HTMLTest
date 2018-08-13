//使用node创建一个web服务器

//1.加载http核心模块
var http = require('http');
//2.使用http.createServer()方法 创建一个web服务器
var server = http.createServer();

//3.request请求对象
//请求对象可以用来获取客户端的一些请求信息，
// response 响应对象 响应对象可以用来给客户端发送信息
server.on('request',function (request,response) {
    console.log('客户端的请求响应路径'+request.url);
    //response对象有一个write方法，可以给客户端发送响应数据
    //write可以使用多次，但是最后一定要使用end来介素响应，否则客户端一直会等待响应
    console.log('返回的响应结果'+ response);
    response.write('hello nodejs');
    //告诉客户端这边结束了
    response.end();


    //思考 根据不同的请求路径响应不同的结果 request.url 做出响应判断
    if (request.url == ''){

    } else if (request.url == ''){

    } else {
        
    }

})

//4.绑定端口号 启动服务器
server.listen(3000,function f() {
    console.log('服务器启动成功了，可以通过127.0.0.1:3000/来进行访问');
});