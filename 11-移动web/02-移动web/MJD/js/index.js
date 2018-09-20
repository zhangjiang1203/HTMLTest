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
    /*屏幕宽度*/
    var width = banner.offsetWidth;
    /*图片容器*/
    var imagebox = banner.querySelector('ul:first-child')
    /*点容器*/
    var pointBox = banner.querySelector('ul:last-child');
    /*所有的点*/
    var points = pointBox.querySelectorAll('li');
    //添加过渡和位移
    var addTransition = function () {
        //设置imageBox的过渡展示，再添加位移
        imagebox.style.transaction = 'all 0.2s';
        imagebox.style.webkitTransition = 'all 0.2s';
    }
    
    //移除过渡
    var removeTransition = function () {
        //清除过渡 瞬间定位
        imagebox.style.transaction = 'none';
        imagebox.style.webkitTransition = 'none';
    }

    //开始位移
    var setTranslateX = function (xoffset) {
        imagebox.style.transform = 'translateX('+ xoffset +'px)';
        imagebox.style.webkitTransform = 'translateX('+ xoffset +'px)';
    }

    var setPoint = function () {
        //清除所有样式
        points.forEach(function (item,id) {
            item.classList.remove('now');
        })
        // 添加样式
        points[index-1].classList.add('now');
    }

    /*设置对应的index*/
    var index = 0;
    var timer = setInterval(function () {
        index++;
        addTransition()
        setTranslateX(-index*width)
    },3000);

    //需要等最后一张动画结束之后去判断，是否瞬间定位第一张
    //transitionend 滑动结束的监听回调方法
    imagebox.addEventListener('transitionend',function () {
        //自动滚动的时候开始播放
        if (index >= 9) {
            index = 1;
        }else if (index <= 0){
            index = 8;
        }
        setTranslateX(-index*width)
        //设置对应的点的背景色 此时的index的取值就是1-8
        setPoint()
    });

    //滑动的时候也是需要无缝的，触摸事件
    var startX = 0;
    imagebox.addEventListener('touchstart',function (e) {
        console.log('开始触摸');
        startX = e.touches[0].clientX;
    })

    imagebox.addEventListener('touchmove',function (e) {
        console.log('手指开始移动');
        var moveX = e.touches[0].clientX;
        var distanceX = moveX - startX
        //元素的定位就是当前的定位+手指移动的距离
        var translateX = -index*width +distanceX;
        //随着手指的滑动做位置的改变
        setTranslateX(translateX)
    });

    imagebox.addEventListener('touchend',function (e) {
        console.log('触摸结束');
    })

}

var downtimer = function () {

}