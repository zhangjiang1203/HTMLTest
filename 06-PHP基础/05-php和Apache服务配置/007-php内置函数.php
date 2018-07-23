<?php 
// php所有能力都是函数，内置1000多个函数
$str = 'hello';
echo strlen($str);

echo "<br>";//换行

//宽字符 一个字符占三个长度 除以3就是字符个数
echo strlen('你好中国');
echo '<br>';

// php专门为宽字符 添加了一套API
// 所有API都是 mb_xxxxx
// 这一套API不在内置的1000多API中，在拓展里面
// 模块成员必须通过配置文件载入模块过后在使用
echo mb_strlen('你好中国');

// 使用PHP拓展的步骤
// 1.在PHP的安装目录创建一个php.ini文件
// 2.extension_dir目录
// 3.去掉前面的;extension=php_mbstring.dll
// 4.默认加载的php.ini文件，修改默认加载路径去Apache设置里面
// phpinfo();


// time 获取到 秒数为单位的时间戳
echo time();
echo "<br>";
// 格式化参数 就是一个时间格式
// 第一个参数 时间格式
// 第二个参数 时间戳 可不传，默认为当前时间戳
// H表示小时 i表示分钟 s表示秒,这样获取的是格林威治时间
// 1.通过代码设置时区
date_default_timezone_set('PRC');
// 2.修改配置文件
// php.ini 修改timezone对应的时区 PRC对应中国(中华人民共和国)
// date.timezone = PRC
echo date('Y-m-d H-i-s',time());

$str = '2017-10-21 15:19:30';

// 对已有格式的时间字符串转换
// strtotime() 可以用来将一个有格式的时间字符串转换为一个时间戳
$timestamp = strtotime($str);
echo "<br>";
// r在date中有特殊意义 转义之后才会生效
// 单引号 是给字符串解析用的
// 双引号 是内部模板函数解析用的
echo date('Y年m月d日<b\r>H-i-s',$timestamp);

// 定义常量 
// 定义常量使用的是内置的 define函数
// 第一个参数是常量的名称，建议全部大写，多个单词下划线分割
// 第二个参数是常量中存放的数据 可以是任意的类型
// 第三个参数是常量名称中是否区分大小写，默认为false 设置为true 不区分大小写
// 
// 常量和变量一样也是一个数据容器，但是不同的是一旦申明过后就不允许被修改
define('SYSTEM_NAME', '我就是我');
define('SYSTEM_FLAG', '1.0',true);

echo '<br>';
echo SYSTEM_NAME;
echo '<br>';
echo SYSTEM_FLAG;
echo '<br>'
echo system_flag;


























 ?>