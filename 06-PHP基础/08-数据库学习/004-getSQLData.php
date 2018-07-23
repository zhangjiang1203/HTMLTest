<?php 
// 1.连接数据库
$connection = mysqli_connect('127.0.0.1','root','zhangjiang','userInfo');
if (!$connection) {
	# code...
	exit('<h1>数据库连接失败</h1>');
}
// 2.查询数据
$query = mysqli_query($connection,'SELECT * FROM posts LIMIT 0,30;');
if (!$query) {
	# code...
	exit('<h1>查询失败</h1>');
}
$data = [];
// 3.拿到查询的对象获取详细数据
while ($result = mysqli_fetch_assoc($query)) {
	# 添加数据
	$data[] = $result;
}
// echo "<pre>";
// var_dump($data);
// echo "</pre>";

// 4.释放内存
mysqli_free_result($query);

// 5.数据库断开连接
mysqli_close($connection);
