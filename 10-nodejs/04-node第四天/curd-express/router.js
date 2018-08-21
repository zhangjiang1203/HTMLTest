//关联app.js文件
module.exports = function(app){
    app.get('/students',function (req, res) {
        // 直接设置转换的文字的编码
        fs.readFile('./students.json','utf8',function (err,data) {
            if (err){
                return res.status(500).send('server error')
            }
            var students =  JSON.parse(data).students
            res.render('index.html',{
                fruits:['苹果','香蕉','梨'],
                students: students
            })
        })
    })

    app.get('/students/new',function (req, res) {
        // 直接设置转换的文字的编码

    })

    app.get('/students/edit',function (req, res) {
        // 直接设置转换的文字的编码

    })

    app.get('/students/delete',function (req, res) {
        // 直接设置转换的文字的编码

    })
}







