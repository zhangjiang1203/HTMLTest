var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')
var studentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:Number,
        enum:[0,1],
        default:0
    },
    age:{
        type:Number,
    },
    hobbies:{
        type:String,
    }
})


//先添加学生


var Student = mongoose.model('Student',studentSchema)

//     var list = [
//      {"name":"张一","gender":"0","age":"21","hobbies":"吃饭、睡觉、打豆豆"},
//     {"name":"张二","gender":"1","age":"22","hobbies":"唱歌、跳舞"},
//     {"name":"张三","gender":"0","age":"23","hobbies":"羽毛球、轮滑"},
//     {"name":"张四","gender":"1","age":"24","hobbies":"篮球、足球、羽毛球"}
//     ]
//
// list.forEach(function (item,index) {
//     var student = new Student(item)
//     student.save(function (err, ret) {
//         if (err) {
//             console.log('保存失败')
//         } else {
//             console.log("保存成功")
//         }
//     })
// })


module.exports = Student

//
// exports.find = function (callback) {
//     Student.find(function (err, ret) {
//         if (err) {
//             callback && callback(err)
//         } else {
//             callback && callback(ret)
//         }
//     })
// }