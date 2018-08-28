var express = require('express')

//连接数据库 查询数据
var User = require('./model/user')

var router = express.Router()

//设置回调的函数
router.get('/',function (req, res) {
    //获取get方法提交的数据
    console.log(req.query)
    res.end('index.html')
})


router.post('/register',function (req, res) {
    //获取post方法提交的数据
    console.log(req.body)
    //先查表获取用户是否存在，存在则不能注册，不存在再去注册
    User.findOne({
        $or:[
            {
                email:body.email
            },
            {
                nickname:body.nickname
            }
        ]
    },function (err, data) {
        // 加载查询获取的值

    })
})


module.exports = router