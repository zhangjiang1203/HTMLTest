// EcmaScript 6 新增加的方法
// find 接收一个方法作为一个参数，方法内部返回一个条件
// find 会遍历所有的元素，执行你给定的带有条件的返回值的函数
// 符合该条件的元素会作为find方法的返回值
// 如果遍历结束还没有符合条件的元素 则返回undefined

var users = [
    {id:1,name:"历史"},
    {id:2,name:"历史"},
    {id:3,name:"历史"},
    {id:4,name:"历史"}
]

Array.prototype.myFind = function (condition) {
    for (var i = 0; i < this.length; i++) {
        if (condition(this[i],i)){
            //返回元素
            return this[i]
        }
    }
}
//使用
var res = users.myFind(function (item,index) {
    return item.id == 4
})

console.log(res)


// findIndex  实现

Array.prototype.myFindIndex = function (condition) {
    for (var i = 0; i < this.length; i++) {
        if (condition(this[i],i)){
            //返回对应的下标
            return i
        }
    }
}
//使用
var index = users.myFindIndex(function (item,index) {
    return item.id == 4
})

console.log(index)