
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test',{useMongoClient:true})

var Schema = mongoose.Schema

var userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    nickname:{
        type:String,
        required:true
    },
    create_time:{
        type:Date,
        //这里不要写date.now() 因为会立刻调用，这里直接给了一个方法
        //当你去new model的时候，如果你没有传递create_time,则mongoose就会调用default方法
        default:Date.now
    },
    last_modified_time:{
        type:Date,
        default: Date.now
    },
    bio:{
        type:String,
        default: ''
    },
    avator:{
        type:String,
        default: '/public/images/avatar-default.png'
    },
    gender:{
        type:Number,
        default: -1,
        enum:[-1,0,1]
    },
    birthday:{
        type:Date,
        // default: Date.now
    },
    status:{
        type:Number,
        // 是否可以登录 评论等 1不可以评论 2 不可以登录
        enum: [0,1,2],
        default: 0
    },


})

var User = mongoose.model('Users',userSchema)


module.exports = User

