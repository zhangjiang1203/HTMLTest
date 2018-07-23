<?php 
if (isset($_GET['action']) && $_GET['action'] == 'closead') {
	setcookie('hide_ad','1');//,time()*1*24*60*60);
	$_COOKIE['hide_ad'] === '1';
}

 ?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>关闭广告</title>
	<style type="text/css">
		.box{
			width: 100%;
			height: 200px;
			position: relative;
		}
		.box a{
			position: absolute;
			right: 0;
			width: 30px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			color: white;
		}
	</style>
</head>
<body>
 
 <?php if (empty($_COOKIE['hide_ad']) || $_COOKIE['hide_ad'] !== '1'): ?>
 	<div class="box" style="background-color: red">
		<a href="005-closead.php?action=closead">X</a>
	</div>
 <?php endif ?>

<!-- 获取跳转到另一个界面处理cookie 完成之后再返回本界面 -->
	

</body>
</html>