function fn(callback) {
    setTimeout(function () {
        var data = 'hello'
        if (callback){
            callback(data)
        }

    },1000)
}

fn(function (data) {
    console.log(data)
})