var fs = require('fs');

/*
* 参数 文件路径（文件不存在会自动创建）
*     文件内容
*     回调函数
*
* */
fs.writeFile('hello.txt','我就是测试这个问题',function (error) {
    if (!error){
        console.log('文件写入成功');
    }

})