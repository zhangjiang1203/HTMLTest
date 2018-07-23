<?php 

function upload(){
	// 上传文件的大小限制和请求体的大小限制
	// 修改php.ini中的post_max_size配置，让服务端可以接受更大的请求体积
	// 修改php.ini中的upload_max_filesize配置，让服务器端支持更大的单个文件上传
	// 
    // 定义全局变量globals要全部大写
	if (!isset($_FILES['img'])) {
		// 客户端提交的没有这个文本域
	    $GLOBALS['message'] = '别玩我了';
		return;
	}
    // 文件赋值给一个变量
    $images = $_FILES['img'];
    var_dump($images);
	if ($images['error'] != UPLOAD_ERR_OK) {
		// 上传失败,UPLOAD_ERR_OK 上传文件定义的错误码，没有错误
		$GLOBALS['message'] = '上传失败';
		return;
	}

	if (is_dir('uploads')) {
	 	echo "文件存在";
	 }else{
	 	echo "文件不存在";
	 	mkdir("uploads",0777,true);
	 }
	// 接收到了文件，存放在临时文件中,将文件从临时文件放到指定的地方
	$source = $images['tmp_name'];
	// // 指定存放位置
	$target = './uploads/' . $images['name'];
	var_dump($source);
	var_dump($target);
	// 移动的目标文件夹一定是一个存在的目录
    $moved = move_uploaded_file($source,$target);
    if (!$moved) {
    	# code...
    	$GLOBALS['message'] = '上传文件失败';
    	return;
    }    //移动成功，上传整个文件成功
    // echo "上传成功"，返回路径地址;
    echo $target;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	# code.. 
	upload();
} 
 ?>

<!DOCTYPE html>
<html>
<head>
	<title>文件上传</title>
</head>
<body>
	<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method='post' enctype='multipart/form-data'>
		<input type="file" name="img">
		<button type="submit">上传</button>
		<?php if (isset($message)): ?>
		    <p style="color: red"><?php echo $message; ?></p>
	    <?php endif ?>
	</form>
	

</body>
</html>