var foo = 'loading';

//添加了exports 外界才能访问这个变量或者函数
exports.foo = 'hello'

exports.add = function (x,y) {
    return x + y;
}