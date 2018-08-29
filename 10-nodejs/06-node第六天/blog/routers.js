var express = require('express')
var md5 = require('blueimp-md5')

//连接数据库 查询数据
var User = require('./model/user')

var router = express.Router()

//设置回调的函数
router.get('/',function (req, res) {
    //获取get方法提交的数据
    console.log(req.session.user)
    // console.log(req.query)
    res.render('index.html')
})


router.post('/register',function (req, res) {
    //先查表获取用户是否存在，存在则不能注册，不存在再去注册
    User.findOne({
        $or:[
            {
                email:req.body.email
            },
            {
                nickname:req.body.nickname
            }
        ]
    },function (err, data) {
        // console.log('查询到的信息',data)
        // 加载查询获取的值
        if (err) {
            return res.status(500).json({
                success: false,
                message: '服务端错误',
                err_code: 500
            })
        }
        //邮箱或者昵称都已存在
        if (data) {
            return res.status(200).json({
                success:false,
                message: '昵称或邮箱已存在',
                err_code: 1
            })
        }

        //对保存的数据库进行加密,对密码进行多次加密,再加一把'盐'，对此处理
        req.body.password = md5(md5(req.body.password),'z89jlk,/.,/.djofjwagfsdgsda,/.,.,asdfadsf1432fasdfgrgf')
        //保存数据到数据库
        new User(req.body).save(function (err, user) {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: '服务端错误',
                    err_code: 500
                })
            }
            //通过session记录登录的状态
            req.session.user = user
            //返回json数据
            //该方法接收一个对象作为参数，它会自动帮你转为json，在发送给浏览器
            res.status(200).json({
                success:true,
                message:'注册成功',
                err_code: 0
            })
        })
        // 服务端重定向只针对同步请求才有效，异步请求重定向没有效果
        // res.redirect('/')
    })
})
module.exports = router