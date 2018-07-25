<?php
// 于情于理都要设置
header('Content-Type:application/json');
// 返回响应的就是json数据
// 对于返回数据的地址 一般我们称之为API
// 返回用户信息
$data = array(
	array('id' => 1,
	      'name' => '张三',
	      'age' => 19 ), 
	array('id' => 2,
	      'name' => '李四',
	      'age' => 22 ),
    array('id' => 3,
	      'name' => '王五',
	      'age' => 19 )
);

if (empty($_GET['id'])) {
	//id值为空的时候返回全部
	//返回给客户端是一个有结构的格式，一般采用json格式传递
	$json = json_encode($data);
	echo $json;
}else{
	foreach ($data as $value) {
		# code...
		if ($value['id'] != $_GET['id']) continue;
		$json = json_encode($value);
		echo $json;
	}
}