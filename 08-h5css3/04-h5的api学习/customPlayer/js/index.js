$(function () {

    var dateformat = function (time) {

        var h = Math.floor(time/3600);
        var m = Math.floor(time%3600/60);
        var s = Math.floor(time%60);

        return (h > 9? h :'0'+h) + ":" + (m > 9 ? m :'0'+m)+ ":"+(s > 9 ? s :'0'+s)
    }
//获取dom节点
    var video = $('video').get(0);
    var $switch = $('.switch');
    var $line = $('.line');
    var $bar = $('.bar');
    var $current = $('.current');
    var $total = $('.total');
    var $expand = $('.expand');
//    1.加载显示效果，显示总时长
    video.oncanplay = function () {
        $('video').show();
        console.log(video.duration);
    //    显示时长
        $total.html(dateformat(video.duration));
    }

//    2.播放/暂停功能，
    $switch.on('click',function () {
        //判断是否在播放
        if ($switch.hasClass('fa-play')){
            video.play();
            $switch.removeClass('fa-play').addClass('fa-pause');
        } else {
            video.pause();
            $switch.removeClass('fa-pause').addClass('fa-play');
        }
    })

//    3.播放进度条，和播放时间的设置
    video.ontimeupdate = function () {
        //更新进度和显示的播放时间
        $current.html(dateformat(video.currentTime));
        //修改进度条
        var per = video.currentTime / video.duration;
        $bar.css('width',per);
    }

//    4.全屏/取消全屏
    $expand.on('click',function () {
        if ($expand.hasClass('fa-arrow-alt')){
        //    全屏
            window.webkitRequestFullScreen();
            $expand.removeClass('fa-arrow-alt').addClass('fa-compress');
        } else {
        //    取消全屏
            document.webkitCancelFullScreen();
            $expand.removeClass('fa-compress').addClass('fa-arrow-alt');

        }

    })

//    5.跃进播放
    $bar.on('click',function (e) {
        //获取当前点击的位置 标签的宽度
        console.log(e.offsetX);
        console.log($bar.width());
        var per = e.offsetX / $bar.width();
        video.currentTime = per * video.duration;
    })

//    6.播放完毕重置功能
    video.onended = function () {
        video.currentTime = 0;
        $switch.removeClass('fa-pause').addClass('fa-play');

    }
});