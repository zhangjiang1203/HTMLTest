//浏览器中的JavaScript没有文件操作的能力的
//但是node中JavaScript具有文件操作的能力


//fs 是file-system的简写，node中读取文件必须引入fs这个核心模块
//fs模块中提供了所有的文件操作相关的api

var fs = require('fs');

//参数 文件名 回调函数
//回调函数有两个参数 error data
fs.readFile('002-没有dom和bom.js',function (error,data) {
    //十六进制转换为字符串显示
    console.log(data.toString());
    console.log(error);
});