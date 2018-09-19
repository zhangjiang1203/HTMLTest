window.onload = function () {
//    顶部搜索
    search()
//    轮播图
    banner()
//    倒计时
    downtimer()
};

var search = function () {
   /*1.默认固定顶部透明背景*/
    /*2.当页面滚动的收，随着页面卷曲的高度变大透明度变大*/
    /*3.页面滚动的时候，超过某以高度的时候透明度不变*/
    var searchBox = document.querySelector('.jd_search_box');
    var banner = document.querySelector('.jd_banner');
    var height = banner.offsetHeight
    //监听页面滚动事件
    window.onscroll = function () {
        // console.log(document.body.scrollTop)
        // console.log(document.documentElement.scrollTop)
        // console.log(document.pageYOffset)
        var scrollTop = document.documentElement.scrollTop;
        console.log(scrollTop)
        var oparity = 0;
        if (scrollTop < height) {
            oparity = scrollTop / height * 0.85;
        } else {
            oparity = 0.85;
        }
        searchBox.style.background = 'rgba(201,21,35,'+oparity+')';

    }

}

var banner = function () {
    /*1.自动轮播且无缝 定时器 过渡
    * 2.点要随着图片一起滑动
    * 3.滑动效果
    * 4.滑动结束的时候 滑动距离不超过屏幕的1/3 吸附回去
    * 5超过屏幕的1/3的时候 切换图片
    * */
    var banner = document.querySelector('.jd_banner');

}

var downtimer = function () {

}