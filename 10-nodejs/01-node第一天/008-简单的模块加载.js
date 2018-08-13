
//加载exports模块
/*
* 1.加载文件模块并执行里面的代码
* 2.拿到被加载文件模块导出的接口对象
* */
var  ret = require('./009-loadPackage');


//在每个文件模块中都提供了一个对象：exports
// exports 默认就是一个空对象
//把需要被外部访问的对象都设置为exports中的一个空对象

console.log(ret.foo);
console.log(ret.add(10,300));