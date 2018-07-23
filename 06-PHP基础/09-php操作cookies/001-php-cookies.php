<?php 
// 设置响应头中的cookie，在客户端存储的就是键值结构
// header('Set-Cookie: bar=foo');
// header在设置相同的键是会覆盖上一个值



// 专门设置cookie的方法
// setcookie只传一个值，是把对应的key删除
setcookie('name');
// 传两个参数是设置参数和值
setcookie('name','zhangsan');
setcookie('age',18);
// 传递第三个参数就是设置过期时间，该参数是int
// 不传递的话就是回话级别的cookie(关闭浏览器就自动删除)
// 设置一天之后过去
setcookie('sex','zhangsan',time()*1*24*60*60)
// 
// path 设置cookie的作用路径范围
// / =>  只要在网站根目录下的所有目录的所有连接地址中都可以访问这个cookie
// /users => 只能在/users目录下的路径才能访问的
setcookie('birth','hahah',time()*1*24*60*60,'/');

// domain 设置cookie的作用域名范围
// 所有设置的域名的子域都可以访问
