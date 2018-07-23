<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>获取分页显示数据</title>
	<style type="text/css">
		*{
			padding: 0;
			margin: 0;
		}

		ul{
			list-style: none;
		}

		a {
			text-decoration: none;
		}

		.box{
			width: 1000px;
			margin: 0 auto;
		}

		.box .center ul li {
			margin-top: 5px;
			border-bottom: 1px solid #cccccc;
			overflow: hidden;
		}

		.box .center ul li .content .leftcontent {
			width: 100px;
			height: 100px;
			float: left;
		}

		.box .center ul li .content .leftcontent img{
			padding: 5px;
			width: 90px;
			height: 90px;
		}

		.box .center ul li .content .rightcontent {
			float: right;
			width: 890px;
			padding:0 5px;
			position:relative;
		}

		.box .center ul li .content .rightcontent .titlep {
			position:relative;
			height: 30px;
		}

		.box .center ul li .content .rightcontent .titlep span {
			position: absolute;
			top: 10px;
		}

		.box .center ul li .content .rightcontent .titlep span.titlespan {
			left: 5px;
			font-weight: bold;
		}

		.box .center ul li .content .rightcontent .titlep span.timespan {
			right: 5px;
			color: #acacac;
		}

		.box .center ul li .content .rightcontent .article{
			margin-top: 10px;
			text-indent: 2em;
			line-height: 25px;
		}

		.box .center ul li .content .rightcontent .contentbottom{
			padding: 5px;
			text-align: right;
		}

		.box .center ul li .content .rightcontent .contentbottom a{
			display: inline-block;
			width: 50px;
			height: 30px;
			line-height: 30px;
			border-radius: 5px;
			text-align: center;
			color: white;
		}

		.box .center ul li .content .rightcontent .contentbottom a.edit{
			background: #1062ff;
		}

		.box .center ul li .content .rightcontent .contentbottom a.delete{
			background: red;
		}

		.box .center ul li .content .rightcontent .contentbottom span{
			padding-left: 10px;
			color: #acacac;
		}

		.box .bottom {
			height: 50px;
		}

		.box .bottom ul{
			width: 200px;
			height: 40px;
			margin: 10px auto;
			padding: 5px;
		}

		.box .bottom ul li{
            float: left;
            padding:0 5px;
            text-align: center;
		}

		.box .bottom ul li a{
            font: 20px/22px arial;
		}
	</style>
	<?php 

		if (empty($_GET['page'])) {
			$count = 1;
			$page = 1;
		}else{
			$count = 2;
			$page = intval($_GET['page']);
		}
		$page = ($page - 1) * 30;

		$connect = mysqli_connect('127.0.0.1','root','zhangjiang','userInfo');

		if (!$connect) {
			exit("<h1>数据库连接失败</h1>");
		}

		// echo 'SELECT * FROM posts  LIMIT ' . $page . ',30;';
		// 2.获取数据对象
		$query = mysqli_query($connect,'SELECT * FROM posts LIMIT ' . $page . ',30;');

		if (!$query) {
			exit('<h1>查询数据失败</h1>');
		}

	 ?>
	 <script type="text/javascript">
	 	window.onload = function(){
	 		console.log('你好');
	 	}
	 </script>
</head>
<body>
	<div class="box">
		<div class="center">
			<ul>
				<?php while ($result = mysqli_fetch_assoc($query)): ?>
					<li>
						<div class="content">
							<div class="leftcontent">
							<img class="showImg" src="<?php echo $result['feature'] ?>">
						</div>
						<div class="rightcontent">
							<p class="titlep">
								<span class="titlespan">标题:<?php echo $result['title']; ?></span>
								<span class="timespan">时间:<?php echo $result['created']; ?></span>
							</p>
							<p class="article"><?php echo $result['content']; ?></p>
							<div class="contentbottom">
								<a class="edit" href="006-editpost.php?id=<?php echo $result['id']; ?>">编辑</a>
								<a class="delete" href="007-deletepost.php?id=<?php echo $result['id']; ?>">删除</a>
								<span class="contentScan">浏览 <?php echo $result['views']; ?></span>
								<span class="contentLike">喜欢 <?php echo $result['likes']; ?></span>
							</div>
						</div>
							
						</div>
					</li>

			    <?php endwhile ?>			
			</ul>
		</div>

    	<div class="bottom">
			<ul >
				<li><a href="005-showpostlists.php?page=1" class="pageindex" name="1">&laquo;</a></li>
				<li><a href="005-showpostlists.php?page=1" class="pageindex">1</a></li>
				<li><a href="005-showpostlists.php?page=2" class="pageindex">2</a></li>
				<li><a href="005-showpostlists.php?page=3" class="pageindex">3</a></li>
				<li><a href="005-showpostlists.php?page=4" class="pageindex">4</a></li>
				<li><a href="005-showpostlists.php?page=5" class="pageindex">5</a></li>
				<li><a href="005-showpostlists.php" class="pageindex">6</a></li>
				<li><a href="005-showpostlists.php?page=6" class="pageindex">&raquo;</a></li>
			</ul>
	    </div>
     		
	</div>

	<?php 
		// 4.释放资源
		mysqli_free_result($query);

		// 5.断开连接
		mysqli_close($connect);
	 ?>

</body>
</html>