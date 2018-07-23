
<?php 
// 通过http响应头告诉客户端我们给的内容是css代码，客户端才回去执行
header('Content-Type:text/css');
 ?>

body{
	background-color:blue;
}