//关联app.js文件
// module.exports = function(app){
//     app.get('/students',function (req, res) {
//         // 直接设置转换的文字的编码
//         fs.readFile('./students.json','utf8',function (err,data) {
//             if (err){
//                 return res.status(500).send('server error')
//             }
//             var students =  JSON.parse(data).students
//             res.render('index.html',{
//                 fruits:['苹果','香蕉','梨'],
//                 students: students
//             })
//         })
//     })
//
//     app.get('/students/new',function (req, res) {
//         // 直接设置转换的文字的编码
//
//     })
//
//     app.get('/students/edit',function (req, res) {
//         // 直接设置转换的文字的编码
//
//     })
//
//     app.get('/students/delete',function (req, res) {
//         // 直接设置转换的文字的编码
//
//     })
// }
//express提供了一种更好的方式

/*
* router.js 只处理路由模块
* 根据不同的请求方法+请求路径设置具体的请求函数
* 划分模块，提高代码的可维护性
* */

var express = require('express')
var Student = require('./operationFile')


//创建一个路由容器
var router = express.Router()
//把路由挂载到router路由容器中
router.get('/students',function (req, res) {
    // 直接设置转换的文字的编码
    Student.find(function (err, data) {
        if (err){
            return res.status(500).send('server error')
        }
        res.render('index.html',{
            fruits:['苹果','香蕉','梨'],
            students: data
        })
    })
})

router.get('/students/new',function (req, res) {
    // 直接设置转换的文字的编码
    res.render('new.html')

})

router.post('/students/new',function (req, res) {
    // 直接设置转换的文字的编码
    console.log(req.body)
    Student.save(req.body,function (err) {
        if (err){
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })


})

router.get('/students/edit',function (req, res) {
    //查询学生信息在渲染数据
    Student.search(req.query.id,function (err, student) {
        if (err){
            return res.status(500).send('server error')
        }
        res.render('edit.html',{
                id:student.id,
                name:student.name,
                age:student.age,
                hobbies:student.hobbies
            }
        )
    })

})

router.post('/students/edit',function (req, res) {
    // 更新学生信息
    console.log('修改学生信息',req.body)
    Student.search(req.body.id,function (err, student) {
        if (err){
            return res.status(500).send('server error')
        }
        student.name = req.body.name
        student.age = req.body.age
        student.hobbies = req.body.hobbies
        Student.update(student,function (err) {
            //修改参数信息
            if (err){
                return res.status(500).send('server error')
            }
            res.redirect('/students')
        })
    })

})

router.get('/students/delete',function (req, res) {
    // 直接设置转换的文字的编码
    Student.delete(req.query.id,function (err) {
        if (err){
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })

})


//把router导出
module.exports = router

