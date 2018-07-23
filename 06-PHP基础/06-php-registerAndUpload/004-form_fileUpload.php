<?php 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// 接收文件的变量是一个超全局变量
	var_dump($_FILES);
	# code...
}

 ?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>文件上传</title>
</head>
<body>
	<!-- 上传文件的时候添加multipart/form-data就是文件的编码格式 method设置为post  -->
	<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype='multipart/form-data'>
		<input type="text">
		<input type="file" name="img">
		<button type="submit">上传</button>
	</form>

</body>
</html>