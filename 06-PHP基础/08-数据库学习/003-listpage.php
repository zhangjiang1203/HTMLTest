<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>全部分类</title>
	<?php 
	// 引入文件，获取数据
    require_once '004-getSQLData.php';

	 ?>

</head>
<body>

	<table border="1">
		<thead>
			<tr>
				<td>编号</td>
				<td>名称</td>
				<td>操作</td>
			</tr>
		</thead>

		<tbody>
			<?php foreach ($data as $value): ?>
				<tr>
					<th role="row"><?php echo $value['id']; ?></th>
					<td><?php echo $value['slug']; ?></td>
					<td><?php echo $value['name']; ?></td>
			    </tr>

			<?php endforeach ?>
		</tbody>
	</table>

</body>
</html>