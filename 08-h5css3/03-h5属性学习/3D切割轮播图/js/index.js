$(function () {
    //入口函数
    //1.点击切换图片
    //上一张
    var index = 0;
    //定义开关
    var flag = true;
    $('.left').on('click',function () {

        if (!flag) return
        flag = false
        index--;
        var  deg = - index * 90;
        // $('ul').css('transform',"rotateX("+deg+"deg)");
        $('li').css('transform','rotateX('+deg+'deg)').each(function (i,item) {
            $(this).css('transition-delay',i*0.25+'s');

        })
    })
    // 下一张
    $('.right').on('click',function () {

        if (!flag) return
        flag = false;
        index++;
        var  deg = -index * 90;
        $('ul').css('transform',"rotateX("+deg+"deg)");
    })

    //设置节流阀,重复点击的时候会重叠
    $('li:last').on('transitionend',function () {
        //最后一个动画执行完毕之后才会设置开关为true
        flag = true;
    })

});