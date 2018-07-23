<?php 

if (empty($_POST['username']) || empty($_POST['password'])) {
	exit('<h1>请输入用户名和密码</h1>');
}


$username = $_POST['username'];
$password = $_POST['password'];

echo $username;
echo $password;

if ($username == 'admin' && $password == '123456'){
	exit("登录成功");
}

exit('<h1>用户名或密码错误</h1>');