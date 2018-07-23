<?php 
// 1.接收get传过来的id
if (empty($_GET['id'])) {
	# code...
	exit('必要值没有传');
}

$id = $_GET['id'];
echo $id;
// 2.连接数据库
$connect = mysqli_connect('127.0.0.1','root','zhangjiang','userInfo');
if (!$connect) {
	exit('<h1>数据库连接失败</h1>');
}

// 3.执行SQL语句
$query = mysqli_query($connect,'delete from posts where id in (' . $id . ');');
if (!$query) {
	exit('<h1>查询数据失败</h1>');
}

// 4.是否删除成功
$affected_rows = mysqli_affected_rows($connect);
if ($affected_rows <= 0) {
	exit('<h1>删除失败</h1>');
}
// 5.重新定向到指定的文件
header('Location: 005-showpostlists.php');