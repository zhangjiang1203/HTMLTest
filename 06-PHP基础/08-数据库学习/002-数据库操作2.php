<?php 
// 通过PHP执行SQL 删除数据语句
# 
# mysqli是一个额外的拓展，想要使用这个拓展，必须要先开启这个拓展
# 如果需要在调用函数的时候忽略错误信息或者警告，可以在函数前面加上@
# 1.连接数据库参数,数据库IP 用户名 密码 数据库名称 
$connection = mysqli_connect('127.0.0.1','root','zhangjiang','userInfo');
// 2.成功返回对象 失败返回false
if (!$connection) {
	exit('<h1>数据库连接失败<h1>');
}

// 3.数据库查询,查询的目标，查询的SQL语句,返回一个对象
$query = mysqli_query($connection,'delete from user where id = 4;');
if (!$query) {
	echo '<h1>查询失败</h1>';
}

//拿到受影响的行
//传入的一定是连接对象
$row = mysqli_affected_rows($connection);
var_dump($row);

// 6.释放查询的结果集
mysqli_free_result($query);
// 7.断开连接
mysqli_close($connection);
 