<?php 
// PHP常见的数据类型和JavaScript基本一致
// string
// integer
// float
// boolean
// array
// object(对象)
// NULL(空)
// Resource(资源类型)
// Callback/Callable(回调或者可调用类型)
// 
// 
// 字符串有多种创建方式:单引号 双引号等
// 单引号：
//   不支持特殊的转义符号 例如 \n
//   表示一个单引号字符内容 可以通过\'
//   表示一个反斜线字符内容 可以通过\\
// 双引号：
//   支持转义符号
//   支持变量解析
echo '<br>';
echo 'hello\nworld';
echo '<br>';
echo 'I\'m a better man';
echo '<br>';
echo 'OS Path: C:\\Windows';

// 双引号
echo '<br>';
echo "hello\nworld";

// 定义变量
$name = 'zhangsan';
echo '<br>';
echo $name;


// 索引数组
$temp_arr = [1,2,3,4,5,6];
echo '<br>';
var_dump($temp_arr);
// 关联数组
$arrlist = array('name' => 'zhangsan','age' => 18,'sex' => 'male' );
echo '<br>';
var_dump($arrlist);

// 数据类型转换
$str = '134';
// 强转为整形 
$num = (int)$str;
// 强转为bool
$flag = (bool)$num;


// 字符串拼接用法比较特殊使用的是 .
$name = 'zce';
$message = 'hey'.$name;
echo '<br>';
echo $message;

// 循环结构
$showlist = [1,2,3,4,5,6];
foreach ($showlist as $key => $value) {
	echo '<br>';
	echo $key.' '.$value.'  ';
}

// for循环
for ($i=0; $i <count($showlist) ; $i++) { 
	echo '<br>';
	echo $showlist[$i];
}

function foo($name,$title){
	echo '<br>';
	echo "$name ($title)";
}

foo('zhang','wang');

// 变量作用域 PHP与绝大多数语言也都不同，默认函数内不能访问函数所在作用域的成员
// 如果要访问全局变量就要通过global关键字声明:

function show_test(){
	global $name;
	$sub = 'sub variable';
	echo '<br>';
	echo $sub.$name;
} 

show_test();


$x = 75;
$y = 35;

// 超级全局变量
function show_name(){
   $GLOBALS['z'] = $GLOBALS['x']+$GLOBALS['y'];
}

show_name();
echo '<br>';
echo $z;

// 定义常量 
// 定义常量使用的是内置的 define函数
// 第一个参数是常量的名称，建议全部大写，多个单词下划线分割
// 第二个参数是常量中存放的数据 可以是任意的类型
// 第三个参数是常量名称中是否区分大小写，默认为false
// 
// 常量和变量一样也是一个数据容器，但是不同的是一旦申明过后就不允许被修改
define('SYSTEM_NAME', '我就是我');
define('SYSTEM_FLAG', true);

echo '<br>';
echo SYSTEM_NAME;
echo '<br>';
echo SYSTEM_FLAG;


echo strlen($name);

$info = 'zhangsannihao         ';
$sub_info = substr($info,4,5);
echo $sub_info;
echo '<p>这就是换行用的 </p>';
echo strtolower($info);
echo '<br>';
echo strtoupper($info);
echo '<br>';
echo trim($info);
echo '<br>';
echo strpos($info, 'zhang');
echo '<br>';
echo str_replace('zhang','我爱你',$info);
echo '<br>';
$temp_str = 'zhang|san|ni|hao';

var_dump(explode('|',$temp_str));

 

 ?>