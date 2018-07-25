<?php 



// 返回一个默认的script脚本
$data = array('name' =>'zhangsna',);
$result = json_encode($data);
// 根据接收到的参数callback反过去调用函数
if (empty($_GET['callback'])) {
	echo $result;
	exit();
}

$callback_name = $_GET['callback'];

header('Content-Type:application/javascript') ;
echo "typeof {$callback_name} === 'function' && {$_GET['callback']}({$result})";