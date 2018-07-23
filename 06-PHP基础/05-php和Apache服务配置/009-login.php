<!DOCTYPE html>
<html>
<head>
	<title>login</title>
</head>
<body
    <!-- 
       1.必须有form标签
       2.form必须要设置action和method
            不设置action 默认是当前页面(必须设置 有兼容问题)
            不设置method 默认是get方式
       3.表单元素(表单域)必须有name，
       4.表单中必须有个提交按钮 

    -->

    <form action="011-loginPHP.php" method="get">
    	<table>
		<tr>
			<td>用户名</td>
			<td><input type="text" name="account"></td>

		</tr>
		<tr>
			<td>密码</td>
			<td><input type="text" name="password"></td>
		</tr>
		<tr>
			<td></td>
			<!-- 提交表单两种方式 -->
			<!-- input:submit image -->
			<!-- button: -->
			<td><input type="submit" value="登录" name=""></td>
		</tr>
	</table>
    </form>
	

</body>
</html>