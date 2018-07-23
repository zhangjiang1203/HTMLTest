<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>音乐列表</title>
	<style type="text/css">
		*{
			padding: 0;
			margin: 0;
		}
		div{
			width: 1000px;
			margin: 10px auto;
		}
		div h2{
			padding: 10px 0;
			font-size: 30px;
			border-bottom: 1px solid gray;

		}
		div  a{
			display: inline-block;
			font-size: 30px;
			text-decoration: none;
			padding: 10px 0;

			
		}
		div .musicTab{
			width: 100%;
			border: 1px solid gray;
		}
		div .musicTab thead{
			background-color: #333333;
		}
		div .musicTab thead tr td{
			height: 40px;
			text-align: center;
			color: white;
		}

		div .musicTab tbody tr td{
			height: 80px;
			text-align: center;
		}
		div .musicTab tr td img{
			width: 102px;
			height: 76px;
			vertical-align: top;
			
		}
		div .musicTab tr td .deleteBtn{
			width: 76px;
			height: 30px;
			background-color: red;
			color: white;
			border-radius: 5px;
		}

	</style>
	<?php 
    require '008-loadJSONFile.php';
    // var_dump($arr);
 

	 ?>

</head>
<body>

	<div>
		<h2>音乐列表</h2>
		<a href="007-addmusic.php">添加</a>
		<table border=1 class="musicTab">
			<thead>
				<tr>
					<td>标题</td>
					<td>歌手</td>
					<td>海报</td>
					<td>音乐</td>
					<td>操作</td>
				</tr>
			</thead>
			<tbody>
				<?php foreach ($arr as $key => $value): ?>
					<tr>
						<td><?php echo $value["title"]; ?></td>
						<td><?php echo $value["artist"]; ?></td>
						<td><img src=<?php echo $value["images"]; ?> alt='我就是图片'></td>
						<td><audio src=<?php echo $value["source"]; ?> controls> </audio></td>
						
						<td><button class="deleteBtn">删除</button></td>
					</tr>
				<?php endforeach ?>
			</tbody>
		</table>
	</div>

</body>
</html>