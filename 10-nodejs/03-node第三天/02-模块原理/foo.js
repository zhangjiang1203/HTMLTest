//node中每个模块内部都有一个自己的module对象
//该module中有一个成员叫，exports 也是一个对象
//
// var module = {
//     exports:{
//         foo:'bar',
//         add:function () {
//
//         }
//     }
// }

//类似于在下面添加这种代码
// module.exports.foo = 'bar'
//
// module.exports.add = function (x,y) {
//     return x + y
// }

//更简单的方式就是
// exports.foo = 'bar'  //导出 {foo:'bar' }
//
//
// exports.add = function (x, y) {
//     return x + y
// }

//导出 {foo:'bar' }
exports.foo = 'bar'
//导出 {foo:'bar' ,a:123}
module.exports.a = 123
//exports ！== module.exports
//最终返回的是module.exports,所以无论exports中的成员是什么都没有用
exports = {
    foo:4456
}
//导出 {foo:'haha' ,a:123}
module.exports.foo = 'haha'


exports.c = 456

exports = module.exports
//重新建立了引用关系，导出模型中也会修改
//导出 {foo:'haha' ,a:123，c:789}
exports.c = 789

//谁来require我 ，谁就得到module.exports
//默认在代码的最后有一句
// return  module.exports