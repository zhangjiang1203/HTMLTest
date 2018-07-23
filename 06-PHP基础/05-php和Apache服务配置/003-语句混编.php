<!DOCTYPE html>
<html>
<head>
	<title>混编显示</title>
</head>
<body>

	<p><?php echo "我在文本中显示"; ?></p>
	<?php if ($age >= 18) { ?> 
	  <p>成年人</p>
    <?php } else { ?> 
      <p>小朋友</p>
    <?php } ?> 

    <!-- 也可以写成下面的格式 -->
    <?php if ($age > 18): ?> 
    	<p>成年人</p>
    <?php else: ?>
    	<P>小朋友</P>
    <?php endif ?>
    <!-- php中有if调用必须要结束掉 -->

</body>
</html>