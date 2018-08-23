const mongoose = require('mongoose');
//连接数据库,该数据库不需要存在，当插入第一条语句的时候会自动创建
mongoose.connect('mongodb://localhost/test');

//创建一个模型，就是在设计数据库
const Cat = mongoose.model('Cat', { name: String });

//添加多个对象
for (var i = 0; i < 100 ; i++) {
    var kitty = new Cat({name:"这就是一只猫，序号是" + i })
    kitty.save().then(() => console.log("保存成功" + i))
}
// //实例化一个cat
// const kitty = new Cat({ name: 'Zildjian' });
// //持久化保存一个kitty实例
// kitty.save().then(() => console.log('meow'));