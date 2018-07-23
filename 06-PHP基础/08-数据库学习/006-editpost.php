<?php 
// 1.获取当前的id
if (empty($_GET['id'])) {
	# code...
	exit('<h1>必须传入指定参数</h1>');
}

$id = $_GET['id'];

// 2.服务器查询数据
$connection = mysqli_connect('127.0.0.1','root','zhangjiang','userInfo');
if (!$connection) {
    exit('<h1>服务器连接失败</h1>');
}

$query = mysqli_query($connection,"select * from posts where id = {$id} limit 1;");
if (!$query) {
	exit('<h1>查询失败</h1>');
}

// 3.拿到查询数据
$user = mysqli_fetch_assoc($query);
if (!$user){
	exit('<h1>找到不你要编辑的数据</h1>');
}

function save_data(){
	// 拿到这个全局变量
	global $user;
	echo "<pre>";
	var_dump($_POST);
	echo "</pre>";
	// update posts set name='' title='' where id=1

} 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	save_data();
	// 编辑之后重新定向到005-showpostlists.php中
}

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>修改内容</title>
	<style type="text/css">
		*{padding:0;margin: 0;}
		.box{
			width: 1000px;
			margin: 0 auto;
		}

		.box .group{
			margin-top: 20px;
			position: relative;
		}
		.box .group:last-child{
			margin-top: 50px;
		}

		.box .group label {
			color: #acacac;
			font-size: 12px;
		}

		.box .group input {
			color: #333333;
			font-size: 16px;
			display: block;
			margin-top: 5px;
			height: 25px;
			width: 100%;
		}

		.box .group #feature,.box .group img{
			height: 100px;
			width: 100px;
			opacity: 0;
		}

		.box .group img{
			opacity: 1;
			position: absolute;
			bottom: 0;
			left: 0;
		}

		.box .group textarea {
			color: #333333;
			font-size: 16px;
			display: block;
			margin-top: 5px;
			height: 300px;
			width: 100%;
		}

		.box  button{
			margin: 30px 0;
			border-radius: 5px;
			width: 100%;
			background-color: skyblue;
			color: white;
			font-size: 18px;
			height: 50px;
		}
	</style>
</head>
<body>

	<div class="box">
		<form action="<?php echo $_SERVER['PHP_SELF'] ?>?id=<?php echo $id; ?>" method="post" enctype="multipart/form-data">
			<div class="group">
				<label for="slug">输入slug</label>
				<input type="text" id="slug" name="slug" value="<?php echo $user['slug'] ?>">
			</div>
			<div class="group">
				<label for="title">输入标题</label>
				<input type="text" id="title" name="title" value="<?php echo $user['title'] ?>">
			</div>
			<div class="group">
				<label >选择图片</label>
				<img src="../uploads/img/default_user_header.jpg">
				<input type="file" id="feature" name="feature">

			</div>
			<div class="group">
				<label for="created">编辑时间</label>
				<input type="datetime" id="created" name="created" value="<?php echo $user['created']; ?>">

			</div>
			<div class="group">
				<textarea id="content" placeholder="请输入消息内容……" name="content"><?php echo $user['content'] ?></textarea>

			</div>

			<button>提交</button>
			
		</form>
		
	</div>

</body>
</html>