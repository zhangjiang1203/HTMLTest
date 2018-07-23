<?php 

if (empty($_COOKIE['num']) || empty($_GET['num'])) {
	# code...
	$num = rand(0,100);
	// 存数据到cookie中
	setcookie('num',$num);
	setcookie('numbers');
	$_COOKIE['numbers'] = '';
} else {
	#比较
	$count = empty($_COOKIE['count']) ? 0 : (int)$_COOKIE['count'];
	$numbers = empty($_COOKIE['numbers']) ? "" : $_COOKIE['numbers']; 
	// echo "hahah ";
	// echo $numbers;
    // var_dump($numbers);
	if ($count < 10) {
		$result = (int)$_GET['num'] - (int)$_COOKIE['num'];
		if ($result == 0) {
			$message = '恭喜你答对了';
			setcookie('num');
		    setcookie('count');
		    setcookie('numbers');
		}elseif ($result < 0) {
			$message = '太小了';
			setcookie('count',$count+1);
			setcookie('numbers',$numbers . ' ' . $_GET['num']);
			$_COOKIE['numbers'] = $numbers . ' ' . $_GET['num'];
		}else{
			$message = '太大了';
			setcookie('count',$count+1);
			setcookie('numbers',$numbers . ' ' . $_GET['num']);
			$_COOKIE['numbers'] = $numbers . ' ' . $_GET['num'];
			
		}
		// echo "喝喝";
		// echo $numbers . ',' . $_GET['num'];
	}else{
		// 删除数字和次数，提示失败
		$message = 'game over';
		setcookie('num');
		setcookie('count');
		setcookie('numbers');
	}
}
 ?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>猜数字</title>
	<style type="text/css">
		*{
			padding: 0;
			margin: 0;
		}
		body{
			background-color: #2b3b49;
			padding: 100px 0;
			text-align: center;
			color: #fff;
			font-size: 2.5em;
		}

		input{
			padding:5px 10px;
			height: 50px;
			border:1px solid #c0c0c0;
			box-sizing: border-box;
			color: #000;
			font-size: 20px;
			width:100px;
		}

		button{
			padding: 5px 20px;
			height: 50px;
			font-size: 16px;
		}
	</style>
</head>
<body>
    <h1>猜数字游戏</h1>
	<p>Hi，我已经准备了一个0-100的数字，你需要在仅有的10次机会之内猜对他</p>
	<?php if (isset($message)): ?>
		<p><?php echo $message ?></p>
	<?php endif ?>
	<form action="006-guessnum.php" method="get">
			<input type="number" min="0" max="100" placeholder="随便猜" name="num" >
			<button type="submit">试一试</button>
	</form>

	<?php if ($_COOKIE['numbers']): ?>
		<p>猜过的数字:<?php echo $_COOKIE['numbers'] ?></p>
	<?php endif ?>

</body>
</html>