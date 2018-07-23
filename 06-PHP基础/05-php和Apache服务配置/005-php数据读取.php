<!DOCTYPE html>
<html>
<head>
	<title>读取并显示文件</title>

    <style>
        *{
            padding: 0;
            margin: 0;
        }

        .box{
            width: 1000px;
            /*border: 1px solid gray;*/
            margin: 0 auto;
        }

        .box #classTab{
            width: 100%;
            /*border-spacing: 10px;*/
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
        $items = file('names.txt');
        $data = [];
        for ($i = 0;$i<count($items);$i++) {
            $lines = $items[$i];
            array_push($data,$lines);
        }
    ?>
    <script>
        window.onload = function () {

            function $(id){ return document.getElementById(id);}
            console.log('开始加载');
            //获取php中的data数据，转化为json接收
            var arr=<?php echo json_encode($data);?>;
            //利用eval()函数将字符串转化为数组
            var dataArr=eval(arr);

            for (var i = 0; i <dataArr.length ; i++) {
                console.log(dataArr[i]);
                var trlist = document.createElement('tr');
                //拆分字符串
                var tdArr = dataArr[i].split('|');
                console.log(tdArr);
                for (var j = 0; j < tdArr.length; j++) {
                    var tdlist = document.createElement('td');

                    trlist.appendChild(tdlist)
                    if (j == tdArr.length -2){
                        var alink = document.createElement('a');
                        alink.innerHTML = tdArr[j];
                        alink.href = tdArr[j+1];
                        alink.target= "_blank";
                        tdlist.appendChild(alink);
                        break;
                    }
                    tdlist.innerHTML = tdArr[j];
                }
                $('classTab').appendChild(trlist);
            }

        }
    </script>
</head>
<body>
<div class="box">
    <table id="classTab">
        <tr>
            <th>&nbsp;&nbsp;&nbsp;id &nbsp;&nbsp;&nbsp; </th>
            <th>&nbsp;&nbsp;&nbsp;姓名&nbsp;&nbsp;&nbsp;  </th>
            <th> &nbsp;&nbsp;&nbsp;年龄 &nbsp;&nbsp;&nbsp; </th>
            <th>&nbsp;&nbsp;&nbsp;个人主页&nbsp;&nbsp;&nbsp;</th>
        </tr>
    </table>
</div>
</body>
</html>