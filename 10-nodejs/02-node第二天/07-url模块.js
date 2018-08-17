var url = require('url')
var obj1 = url.parse('/pinglun?name=战三来理发店&message=拉三等奖分类看电视积分')
console.log(obj1)

//将一个请求的url转化为一个对象，第二个参数表示是否将查询字符串转为一个对象，通过query属性来访问
var obj2 = url.parse('/pinglun?name=战三来理发店&message=拉三等奖分类看电视积分',true)
console.log(obj2)

/* 第一个输出
* Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=战三来理发店&message=拉三等奖分类看电视积分',
  query: 'name=战三来理发店&message=拉三等奖分类看电视积分',
  pathname: '/pinglun',
  path: '/pinglun?name=战三来理发店&message=拉三等奖分类看电视积分',
  href: '/pinglun?name=战三来理发店&message=拉三等奖分类看电视积分' }


  第二个输出
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=战三来理发店&message=拉三等奖分类看电视积分',
  query: { name: '战三来理发店', message: '拉三等奖分类看电视积分' },
  pathname: '/pinglun',
  path: '/pinglun?name=战三来理发店&message=拉三等奖分类看电视积分',
  href: '/pinglun?name=战三来理发店&message=拉三等奖分类看电视积分' }*/