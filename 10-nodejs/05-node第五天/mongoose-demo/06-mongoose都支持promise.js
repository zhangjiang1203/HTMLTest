var mongoose = require('mongoose')

var Schema = mongoose.Schema
//连接数据库,该数据库不需要存在，当插入第一条语句的时候会自动创建
mongoose.connect('mongodb://localhost/test')
//设计集合结构
//字段名称就是表结构中的属性名称
//约束的目的是为了保证数据的完成性，不要有脏数据
var userSchema = new Schema({
    //设置字段的约束，
    username:{
        type:String,
        required:true
    },
    userage:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

/*将文档结构发布为模型
* mongoose.model 方法就是用来将一个架构发布为model
* 第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
*         mongoose会自动将大写名词的字符串生成 小写复数 的集合名称
*         例如这里的User 最终会变成users集合名称
* 第二个参数架构Schema
* 返回值：模型构造函数
* */
var User = mongoose.model('User',userSchema)

/*使用构造函数操作数据(增删改查)*/
// var admin = new User({
//     username:'zhangsan',
//     userage:19,
//     address:"上海浦东新区金桥"
// })

// for (var i = 0; i < 5; i++) {
//     var admin = new User({
//         username:'zhangsan'+i,
//         userage:19+i,
//         address:"上海浦东新区金桥门牌号"+i
//     })
//     admin.save(function (err,res) {
//         if (err) {
//             console.log("保存失败")
//         }else {
//             console.log("保存成功",res)
//         }
//     })
// }

//新增对象---对象持久化
// admin.save(function (err,res) {
//     if (err) {
//         console.log("保存失败")
//     }else {
//         console.log("保存成功",res)
//     }
// })

//查询数据,查询所有的数据,返回的是一个数组集合
// User.find(function (err,res) {
//     if (err) {
//         console.log("查询失败")
//     } else {
//         console.log(res)
//     }
// })

User.find().then(function (data) {
    console.log(data)
})

User.findOne({username:'zhangsan3'}).then(function (data) {
    console.log(data)
})

//添加条件查询  返回的也是一个数组集合
// User.find({username:'zhangsan'},function (err,res) {
//     if (err) {
//         console.log("查询失败")
//     } else {
//         console.log(res)
//     }
// })


//添加条件查询  返回的也是一个字典对象
// User.findOne({username:'zhangsan'},function (err,res) {
//     if (err) {
//         console.log("查询失败")
//     } else {
//         console.log(res)
//     }
// })


//删除数据
// User.remove({username:'zhangsan1'},function (err, res) {
//     if (err) {
//         console.log("删除失败")
//     } else {
//         console.log("删除成功",res)
//     }
// })


//更新数据1，根据id查询数据更新数据
// User.findByIdAndUpdate('5b7e650d0effee4a570c3024',{
//     username:"张三"
// },function (err,res) {
//     if (err) {
//         console.log("修改失败")
//     } else {
//         console.log("修改成功",res)
//     }
// })

