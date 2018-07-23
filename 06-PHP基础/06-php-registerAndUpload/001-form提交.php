<?php 
// 表单的处理逻辑放在HTML之前，为了更灵活的去控制HTML的输出
// 表单的处理逻辑不是每一次都要处理，判断请求的方式再去处理是否显示
if ($_SERVER['REQUEST_METHOD']	=== 'POST') {
	# post请求，点击按钮提交请求
	var_dump($_POST);
}
 // 1.请求的方式不同
 // 2.传参方式不同，get用url传参 post用请求体传参
 // 

 ?>

<!DOCTYPE html>
<html>
<head>
	<title>form表单</title>
</head>
<body>
	<!-- 处理函数指给文件本身，不加action默认就是文件本身 -->
	<!-- 动态获取文件的路径地址 $_SERVER['PHP_SELF'] 这样就不会因为文件名修改而找不到文件-->
	 <form action=<?php echo $_SERVER['PHP_SELF']; ?> method="post">
	 	<div>
	 		<label for="username">用户名</label>
	 		<input type="text" name="username" id="username">
	 	</div>
	 	<div>
	 		<label for="password">密码</label>
	 		<input type="password" name="password" id="password">
	 	</div>
	 	<button type="submit" >登  录</button>
	 </form>

</body>
</html>