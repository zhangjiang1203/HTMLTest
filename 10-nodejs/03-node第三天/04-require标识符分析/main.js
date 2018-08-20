//模块标识符
//如果是非路径形式的模块标识
//  ./
//  ../
//  /XXX  绝对路径  基本不用
//  /   表示的是当前的文件模块所属磁盘根路径
require('foo.js')


// 核心模块本质也是文件
// node的核心模块直接引用
require('fs')
require('http')


//第三方模块加载
//使用的时候可以通过require('包名')的方式来进行加载才可以使用
//不可能有第三方包和核心模块名字是一样的
//既不是核心模块也不是路径形式的模块
// 先找到当前文件所在的目录中的mode_modules目录
// node_modules/art-template
// node_modules/art-template/package.json 文件
// node_modules/art-template/package.json 文件中的main属性
// main属性中记录了art-template 入口模块
// 然后加载使用这个第三方包
// 实际上最终加载的还是文件


var template = require('art-template')