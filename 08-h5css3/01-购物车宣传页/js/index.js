$(function () {
    //设置每个屏的背景颜色
    //设置屏幕内容的对齐方式，默认是垂直居中的
    //监听进入某一屏的时候的回调函数

    $('#carshow').fullpage({
        sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#ffeedd','#d04759','#84d9ed','#8ac060'],
        verticalCentered:false,//是否垂直居中
        navigation:true,//显示导航条
        continuousVertical:true,//循环滚动
        afterLoad:function (link,index) {
        //    监听进入某一屏的回调方法
            $('.section').eq(index-1).addClass('now');
            
        }
    });
})
