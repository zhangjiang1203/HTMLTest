var http = require('http')
var fs = require('fs')

//把所有的文件都放在一个统一的文件中
var rootPath = 'usr/root/'
//创建server
var server = http.createServer()
//监听请求

//根据用户输入的路径，返回不同的文件，以此来返回不同的文件显示
server.on('request',function (req,res) {
//    判断request中的url 再去根据url做出不同的响应
    var url = req.url
    var filePath = 'index.html'
    if (url !== '/'){
        filePath = url;
    }
    fs.readFile(rootPath + filePath,function (err, data) {
        if (err != null) {
            res.end(data)
            return
        }

        res.end('404 Not Found')
    })

}).listen(3000,function () {
    //绑定端口号
    console.log('开始运行')
})