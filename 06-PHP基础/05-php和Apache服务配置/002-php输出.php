<?php 
// echo输出语句
// echo不是PHP中的一个特殊指令
// 不一定需要像函数那样通过‘()’去使用
// 注意：echo后面紧跟着一个空格

echo "hello world";
echo "hello",'zhang','jiang'; 

// print输出语句
// print和echo的唯一区别就是只能有一个参数
// 
print('你好，我的未来');


// var_dump
// var_dump是一个函数，必须跟上()调用
// 可以将数据以及数据的类型打印为特定格式
var_dump('hello,我的过去');

$name = "http://www.baidu.com";
var_dump(strpos("http://",$name));

 ?>