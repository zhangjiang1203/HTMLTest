<!DOCTYPE html>
<html>
<head>
	<title>当前日期</title>
</head>
<body>
<h1>这是一个包含PHP脚本的网页</h1>
<p>这里是原封不动的输出</p>

	<?php echo date('Y-m-d'); 
	// <!-- php语法的规则 -->
	// <!-- "<?php可以让代码进入PHP模式
	// "<?"可以让代码退出PHP模式
	   $foo = 'age';
	   echo $foo;
	// 如果PHP代码处在整个文件的末尾，建议删除结束标记，这样不会有额为的空行产生
	// 只有处在PHP内部的代码才是PHP代码，PHP标记以外都原封不动 
	?>

<p>这里也不会变</p>
<p><?php echo "<b>这还是PHP输出的</b>"; ?></p>	
	
</body>
</html>
