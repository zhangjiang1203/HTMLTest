//应用场景

//一个界面中展示多个请求数据，每个接口都完成回调之后才会渲染到屏幕上
//解决多个异步函数方法嵌套的回调地狱现象


function get(url) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest()
        req.onload = function () {
            resolve(req.responseText)
        }
        req.onerror = function () {
            reject(err)
        }
        req.open('get',url,true)
        req.send()

    })
}