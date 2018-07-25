<?php 
$data = array('name' => 'zhangsan',
              'age'=> 18, );

$json = json_encode($data);

// 默认是不允许跨域访问的
// 一行代码搞定跨域,允许远端访问 *表示统配，也可以指定访问
header("Access-Control-Allow-Origin:*");

echo $json;

 ?>