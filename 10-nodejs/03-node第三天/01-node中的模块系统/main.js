//node中的javascript有一个重要的概念
// 1.模块作用域
// 2.使用require方法用来加载模块
// 3.使用exports接口对象用来导出模块中的成员

var foo = require('./foo')

foo.name

console.log(foo)