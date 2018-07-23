<?php 

$content = file_get_contents('data.json');
// json_decode默认反序列化时将json中的对象转换为PHP中的stdClass
// 
$arr = json_decode($content,true);

 ?>