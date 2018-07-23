<!DOCTYPE html>
<html>
<head>
	<title>php展示数据</title>
	<style>
        *{
            padding: 0;
            margin: 0;
        }

        .box{
            width: 1000px;
            margin: 0 auto;
        }

        .box #classTab{
            width: 100%;
            background: gray;
        }

        .box #classTab tr{
            border-bottom: 1px solid red;
            width: 100%;
            background: white;
            height: 40px;

        }

        .box #classTab tr td{
            text-align: center;

        }
    </style>
     <?php 
         // 整个文件读取到一个字符串中，获取文件数据
         $content = file_get_contents('names.txt');
         // 拆分字符串
         $info_data = explode("\n",$content);
         // 整理数组
         $show_data = [];
         foreach ($info_data as $item) {
         	if (strlen($item)) {
         		$item_info = explode("|",$item);
         	    $show_data[] = $item_info;
         	}
         }

         // php中有三个超全局变量来专门获取表单提交内容
         // $_GET 用于获取get方式提交的内容，就是接收URL地址问号参数中的数据
         // $_POST 用于获取POST方式提交的内容，就是接收请求体中的数据
         // $_REQUEST 用于获取GET和POST方式提交的内容
         // 

         // 获取文件中的id编号
         if (count($_POST) > 0) {
            $tempArr = [];
            $tempArr[] = count($show_data)+1;
            foreach ($_POST as $key => $value) {
                $tempArr[] = $value;
            }
            // 添加数据
            $show_data[] = $tempArr;
            // 写入到文件中
            $file = fopen('names.txt','a+');
            // 将数组转化为 字符串，每个元素添加' | '
            $show = implode(' | ',$tempArr);
            // 添加换行操作
            fwrite($file,"$show\r\n");
            fclose($file);
        }
         

       ?>
</head>
<body>
	<div class="box">
    <table id="classTab">
        <tr>
            <th>id</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>个人邮箱</th>
            <th>个人主页</th>
        </tr>
        <?php foreach ($show_data as $line): ?>
        	<tr>
        		<?php foreach ($line as $item): ?>
        			<?php $item_info = trim($item) ?>
        			<?php if (strpos($item_info,'http://') ===0 ): ?>
        				<td><a href="<?php echo $item_info ?>"><?php echo substr($item_info,7); ?></a></td>
        			<?php else: ?>
        				<td><?php echo $item_info; ?></td>
        			<?php endif ?>
        		<?php endforeach ?>
        	</tr>
        <?php endforeach ?>
    </table>
</div>

</body>
</html>