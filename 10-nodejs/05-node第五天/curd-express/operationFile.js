/*
* operationFile.js
* 数据操作文件模块
* 只处理数据，不关心业务
*
* */

var fs = require('fs')

var filePath = './students.json'

/* 获取所有学生
* 第一个参数是err
* 第二个参数是学生信息
*
* */
exports.find = function (callback) {
    fs.readFile(filePath,'utf8',function (err,data) {
        if (err){
            return callback && callback(err)
        }
        callback && callback(null,JSON.parse(data).students)
    })
}

/*添加保存学生*/
exports.save = function (student,callback) {

    this.find(function (err,students) {
        if (err){
            return callback && callback(err)
        }
        //获取最后一个学生的id加1
        student.id = students[students.length-1].id + 1
        students.push(student)
        //转成字符串写入文件
        var result = JSON.stringify({students:students})
        fs.writeFile(filePath,result,function (err) {
            if (err){
                return callback && callback(err)
            }
            callback && callback(null)
        })
    })
}

/*更新学生*/
exports.update = function (student,callback) {

    this.find(function (err,students) {
        if (err){
            return callback && callback(err)
        }
        for (var i = 0; i < students.length; i++) {
            if (student.id == students[i].id){
                //替换之前位置的元素
                students.splice(i,1,student)
                break;
            }
        }
        //转成字符串写入文件
        var result = JSON.stringify({students:students})
        fs.writeFile(filePath,result,function (err) {
            if (err){
                return callback(err)
            }
            callback && callback(null)
        })
    })

}

/*删除学生*/
exports.delete = function (id,callback) {
    this.find(function (err,students) {
        if (err){
            return callback && callback(err)
        }
        //查找对应的下标
        var deleteIndex = students.findIndex(function (item) {
            return item.id == id
        })
        students.splice(deleteIndex,1)
        //转成字符串写入文件
        var result = JSON.stringify({students:students})
        fs.writeFile(filePath,result,function (err) {
            if (err){
                return callback(err)
            }
            callback && callback(null)
        })
    })
}

/*根据id 查询学生信息*/
exports.search = function (id,callback) {
    this.find(function (err,students) {
        if (err){
            return callback && callback(err)
        }
        var ret = students.find(function (item) {
            return item.id == id
        })
        callback && callback(null,ret)
    })
}

//全等于要保证两边的类型一致
//字符串转int数字 parseInt('1')