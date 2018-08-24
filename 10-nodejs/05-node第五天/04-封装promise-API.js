var fs = require('fs')

function preadFile(path) {
    return new Promise(function (resolve,reject) {
        fs.readFile(path,function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data.toString())
            }
        })
    })
}

 
preadFile('./showdata.json')
    .then(function (data) {
        console.log(data)
        //可以在后面继续添加返回值，执行链式操作
})
