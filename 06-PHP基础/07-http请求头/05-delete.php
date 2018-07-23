<?php 
// 找到要删除的数据
// 通过客户端在URL地址中的问号参数的不同来辨别要删除的音乐
if (empty($_GET['id'])) {
	// 没有传递参数
	exit('<h1>必须指定参数</h1>');
}
$id = $_GET['id'];
// 从元数据中删除数据
$file_path = '../06-php-registerAndUpload/data.json';
$json_arr = json_decode(file_get_contents($file_path),true);
// echo "<pre>";
// var_dump($json_arr);
// echo "</pre>";
foreach ($json_arr as $value) {
	if ($value['id'] != $_GET['id']) continue;
	$index = array_search($value,$json_arr);
	array_splice($json_arr,$index,1);
	// 保存数据到指定数据过后的内容
	$json = json_encode($json_arr);
	file_put_contents($file_path,$json);
	header('Location:003-deletemusic.php');
// 跳转回到指定页
// 利用a标签拼接字符串显示数据 在href后面添加?拼接字符串
}

// 显示格式设置
// echo "<pre>";
// var_dump($json_arr);
// echo "</pre>";




 