var fs = require('fs')
var template = require('art-template')

//文档使用
//替换文本显示
fs.readFile('06-template.html',function (err, data) {
    if (err){
        return console.log('文件读取失败')
    }

    var ret = template.render(data.toString(),{
        name:'Jack',
        age:18,
        address:'中国上海',
        hobbies:['吃','撸代码','听音乐','溜冰','飞行']
    })
    console.log(ret);

})
