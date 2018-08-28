var path = require('path')


var filepath = '/Users/zitang/Documents/HTMLTest/10-nodejs/06-node第六天/01-path模块介绍.js'

//只有一个参数 只会输出文件的名称加上后缀名
//两个参数时，当后一个参数是前一个文件的后缀名时，只输出文件名，否则全部输出
var resut = path.basename(filepath,'.js')
//获取目录
var result1 = path.dirname(filepath)
//获取文件的拓展名
var ex = path.extname(filepath)
// 判断是否是决定路径
// path.isAbsolute()

//解析文件路径
path.parse(filepath)

var join = path.join('/Users/zitang/Documents/HTML','test/name')
//添加一个绝对路径
var join1 = path.join(__dirname,'test/name')
console.log(join1)