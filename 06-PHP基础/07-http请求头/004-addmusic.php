
<?php 

require_once '../06-php-registerAndUpload/008-loadJSONFile.php';


function uploadfile(){
	if (empty($_POST['title'])) {
		# code...
		$GLOBALS['error_msg'] = '请输入标题';
		return;
	}

	if (empty($_POST['artist'])) {
		# code...
		$GLOBALS['error_msg'] = '请输入歌手';
		return;
	}

	// 都成功之后跳转到特定界面
	if (checkImage() && checkAudio()) {
		// 存储文件
		// 获取当前歌单数组
		$json_Arr = json_decode(file_get_contents('data.json'),true);
		var_dump($json_Arr);
		echo "<br>";
		echo "<br>";
		$tmp_name = array(
			'id' => count($json_Arr) + 1,
			'title' => $_POST['title'],
			'artist' => $_POST['artist'],
			'images' => $GLOBALS['image_path'],
			'source' => $GLOBALS['audio_path']
		 );
		$json_Arr[] = $tmp_name;
		var_dump($json_Arr);	
		file_put_contents('data.json', json_encode($json_Arr));
		// 跳转到页面
		header('Location:003-deletemusic.php');
	}
	
	
}

function checkImage(){
	// 判断文件是否上传
	if (empty($_FILES['images'])) {
		# code...
		// 客户端提交表单中有image文件域
		$GLOBALS['error_msg'] = '请正确提交图片文件';
		return False;
	}

	$images = $_FILES['images'];
	//判断用户是否选择了文件
	if ($images['error'] !== UPLOAD_ERR_OK) {
		$GLOBALS['error_msg'] = '请选择图片文件';
		return False;
	}

	// 校验文件大小和类型
	if ($images['size'] > 10 * 1024 * 1024) {
		//文件大小限制在10M
		$GLOBALS['error_msg'] = "图片过大";
		return False;
	}

	// 校验类型 传入一个数组
	$allow_types = array('image/jpg','image/png','image/jpeg');
	// 判断上传的文件类型是否是指定的其中的一个类型
	if (!in_array($images['type'],$allow_types)) {
		$GLOBALS['error_msg'] = '这是不支持的图片文件';
		return False;
	}

	if (!is_dir('../uploads/img')) {
	 	mkdir("../uploads/img",0777,true);
	}
    
	// uniqid()生成一个随机的标识，防止文件重名被覆盖掉
	// move_uploaded_file在Windows中文系统上要求传入的参数如果有中文必须是GBK编码
	// 切记在接收文件时注意文件名中文的问题，通过iconv函数转换中文编码为GBK编码
	// $target = '../uploads/img/' . uniqid() . $images['name'];
	$target = '../uploads/img/' . uniqid() . iconv('utf-8', 'GBK', $images['name']);
	if (!move_uploaded_file($images['tmp_name'],$target)) {
		$GLOBALS['error_msg'] = '上传图片失败';
		return False;
	}
	// 去掉前面的两个点 在转化为utf-8格式的编码
	$GLOBALS['image_path'] = iconv('GBK','UTF-8',substr($target,2));	
	$GLOBALS['errror_msg'] = '上传图片成功';
	return True;
}


function checkAudio(){
    // 接收音乐
	if (empty($_FILES['audio'])) {
		$GLOBALS['error_msg'] = "请上传音乐文件";
		return False;
	}
	$audio = $_FILES['audio'];
	var_dump($audio);
	if ($audio['error'] !== UPLOAD_ERR_OK) {
		$GLOBALS['error_msg'] = "请正确上传音乐文件";
		return False;
	}

	if ($audio['size'] > 10 * 1024 * 1024) {
		//文件大小限制在1M
		$GLOBALS['error_msg'] = "音乐文件太大";
		return False;
	}

    if ($audio['size'] < 1 * 1024 * 1024) {
		//文件大小限制在10M
		$GLOBALS['error_msg'] = "音乐文件太小";
		return False;
	}

	// 校验类型 传入一个数组
	$allow_types = array('audio/mp3','audio/wma','audio/m4a');
	// 判断上传的文件类型是否是指定的其中的一个类型
	if (!in_array($audio['type'],$allow_types)) {
		$GLOBALS['error_msg'] = '这是不支持的音乐文件';
		return False;
	}

	if (!is_dir('../uploads/audio')) {
	 	mkdir("../uploads/audio",0777,true);
	}

	$target = '../uploads/img/' . uniqid() . iconv('UTF-8', 'GBK', $audio['name']);
	if (!move_uploaded_file($audio['tmp_name'],$target)) {
		$GLOBALS['error_msg'] = '上传音乐失败';
		
		return False;
	}
	$GLOBALS['audio_path'] = iconv('GBK', 'UTF-8',substr($target,2));
	$GLOBALS['errror_msg'] = '上传音乐成功';
	return True;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// 接收文件的变量是一个超全局变量
	uploadfile();
	
}

 ?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>添加音乐</title>
	<style type="text/css">
		*{
			padding: 0;
			margin: 0;
		}

		div{
			width: 1000px;
			margin: 0 auto;
		}
		div p{
			margin-top: 30px;
			color: gray;
		}
		div input{
			width: 100%;
			height: 30px;
			display: block;
			margin: 20px 0;
		}

		div button{
			margin-top: 50px;
			width: 100%;
			height: 40px;
			background-color: blue;
			border-radius: 5px;
			font-size: 18px;
			color: white;
		}
	</style>
</head>
<body>
	<!-- 设置文件上传的格式enctype -->
	<!-- 不上传文件enctype可以不用添加 -->
	<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype='multipart/form-data'>
		<div>
			<p>标题</p>
			<input type="text" name="title">

			<p>歌手</p>
			<input type="text" name="artist">

            <!-- accept属性可以限制添加的文件类型 值是MIME Type 比如图片 image/* 设置所有上传文件，不能解决文件的限制，还是要在服务端继续校验 -->
            <!-- accept还可以在后面添加'.lrc,.mp3,'这种格式限制添加文件的类型 -->
			<p>海报</p>
			<!-- 添加multiple可以让一个文件域多选 -->
			<!-- 上传多个文件，在name属性后面的字段添加[],既是name=images[] -->
			<!-- 上传多个文件 都在images[]这个数组中 -->
			<input type="file" name="images" accept="image/*" multiple>

			<p>歌曲</p>
			<input type="file" name="audio" accept="audio/*">

            

			<?php if (isset($error_msg)): ?>
				<p style="color: red"><?php echo $error_msg ?></p>
			<?php endif ?>

			<button type="submit">提交</button>
	    </div>

	</form>

	

</body>
</html>