var fs = require('fs')

//1.读取文件路径
//2.得到的文件路径展示到当前界面上
//3.使用模板显示当前的路径
fs.readdir('/Users/zitang/Documents/HTMLTest/10-nodejs/',function (err,data) {
    if (err) {
        return console.log('目录不存在')
    }
    //
    data.forEach(function (item,index) {
        console.log(item,index)
    })

})