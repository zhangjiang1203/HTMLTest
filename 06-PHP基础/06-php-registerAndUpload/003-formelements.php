<?php 

var_dump($_POST);
 ?>

<!DOCTYPE html>
<html>
<head>
	<title>表单</title>
</head>
<body>
	<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method='POST'>
		<!-- label包裹input标签是为了点击文件的时候input标签也会响应 -->
		<!-- radio 标签互斥 设置相同的name -->
		性别
		<!-- radio提交的时候不设置value都是显示on，再有在设置了value之后才会同时显示
		value值相对应的名称 -->
		<!--当表单中使用了radio，一定要为相同name的radio设置不用的value，让服务器可以识别-->
		<label><input type="radio" name="sex" value="male"> 男</label>
		<label><input type="radio" name="sex" value="female"> 女</label>
		<br>
		<!-- checkbox提交的时候必须要有name属性，不设置name不会提交checkbox属性 -->
		<!-- 没有选中则不会提交 -->
		<label><input type="checkbox" name="agree"> 同意该协议</label>
		<br>
		<!-- 多个checkbox同时提交，服务器端只会接收一个显示，对多个选择的提交在name后面添加[],php
		中这就是在数组中添加新值,服务器端接收的就是一个索引数组 -->
		<label><input type="checkbox" name="fun[]" value="basketball"> 篮球</label>
		<label><input type="checkbox" name="fun[]" value="football"> 足球</label>
		<label><input type="checkbox" name="fun[]" value="yumao"> 羽毛球</label>
		<label><input type="checkbox" name="fun[]" value="bingpang"> 乒乓球</label>
		<label><input type="checkbox" name="fun[]" value="skecting"> 轮滑</label>

		<select name="status">
			<!-- 如果option没有设置value，提交的就是innerText，否则提交的就是value的值 -->
			<option value="1">激活</option>
			<option value="2">未激活</option>
			<option value="3">待激活</option>
		</select>

		<br>
		<button type="submit">提交</button>

	</form>
</body>
</html>