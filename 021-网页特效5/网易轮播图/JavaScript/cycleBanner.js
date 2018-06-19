window.onload = function () {

    // function $(id) {return document.getElementById(id);}

    var images = $('banner_main').children;
    var slider = $('navcon_slider');
    for (var i = 0;i < images.length;i++){
        //动态添加span
        var span = document.createElement('span');
        span.innerHTML = images.length - i;
        span.className = 'slider-nav';
        if (i == images.length - 1){
            span.className = 'slider-nav current';
        }
        slider.insertBefore(span,slider.children[1]);
    }

    //拿到盒子的宽度
    var boxwidth = $('w_slider').clientWidth;
    for (var i = 1; i < images.length ; i++) {
        images[i].style.left = boxwidth + 'px';
    }
    
    var spans = slider.children;
    //spans是八个按钮，他们都是span
    //遍历span 添加点击事件
    var iNow = 0;//控制播放图片的张数
    for (var k in spans){
        //k 是索引号 spans[0]表示第一个元素
        spans[k].onclick = function () {
            if (this.className == 'slider-nav-prev'){
            //点击了左侧的盒子
                customBackAnimate(images[iNow],{left:boxwidth},30)
                --iNow < 0 ? iNow = images.length -1 : iNow;
                images[iNow].style.left = -boxwidth + 'px';
                customBackAnimate(images[iNow],{left:0},30)

            }else if (this.className == 'slider-nav-next'){
                autoPlay();
            }else {
                var num = parseInt(this.innerHTML) - 1;
                if ( num > iNow){
                     //做法等同于 右侧按钮
                    //当前的这张慢慢的走出去
                    customBackAnimate(images[iNow],{left:-boxwidth},30);
                    //点击的那个索引号，快速走到右侧
                    images[num].style.left = boxwidth + 'px';
                    //点击的索引号开始滑动
                }else if (num < iNow) {
                    //当前这张慢慢的走到右边
                    customBackAnimate(images[iNow],{left:boxwidth},30);
                    images[num].style.left = -boxwidth + 'px';
                }
                //给当前的索引号
                iNow = num;
                customBackAnimate(images[iNow],{left:0},30);
            }
            //设置当前显示的span选中项
            setSquare();
        }
    }

    //清除所有的span,设置需要
    function setSquare() {
        for (var i = 1; i < spans.length - 1; i++) {
            spans[i].className = 'slider-nav' ;
        }
        spans[iNow+1].className = 'slider-nav current'
    }

    //定时器 就是点击右侧按钮
    var timer = null;
    timer = setInterval(autoPlay,2000);
    function autoPlay() {
        //点击右侧盒子
        customBackAnimate(images[iNow],{left:-boxwidth},30);
        ++iNow > images.length - 1 ? iNow = 0 : iNow;
        images[iNow].style.left = boxwidth + 'px';
        customBackAnimate(images[iNow],{left:0},30)
        setSquare();
    }

    //清除和开始定时器
    $('w_slider').onmouseover = function () {
        clearInterval(timer);
    }

    $('w_slider').onmouseout = function () {
        //保险起见
        clearInterval(timer);//要执行定时器 先清除定时器
        timer = setInterval(autoPlay,2000);
    }
}