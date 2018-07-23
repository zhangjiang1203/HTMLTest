<?php 

//引入外部文件
//require 用于在当前脚本中载入一个别的脚本
//require 多次引入会有notice提示 重复定义常量
//文件必须存在，不存在会致命报错
//
require 'config.php';
echo $name;


// 只加载一次,
// 文件必须存在，不存在会报致命
require_once 'config.php';


// 加载多次,
// 文件可以不存在，会有警告
// include 'config.php';
include 'config.php';

// 只加载一次,
// 文件可以不必须存在，会有警告
// include_once 'config.php';
include_once 'config.php';