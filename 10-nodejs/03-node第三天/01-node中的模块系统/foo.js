console.log('我就是哈哈哈')

var foo = '我就是不一样的自己'
exports.name = 'zhansan'

//exports就是一个对象
//添加exports为了外部访问这个变量或者方法
exports.add = function (x,y) {
    return x+y
}


//如果一个模块需要直接导出某个成员，而非挂载的方法
//这个时候必须使用下面的这种方式
module.exports = 'hello'


/*
* 加载 require
* var name = require('模块')
* 两个作用
* 1.执行被加载模块中的代码
* 2.得到被加载模块中的exports导出接口对象
*
* 导出  exports
* 导出多个成员
* exports.a = 123
* exports.b = '1234'
* exports.c = function(){}
*
* 导出单个成员
* module.exports = 'hello'
* 导出一个对象也可以包含多个内容
*
*
* */