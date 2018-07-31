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
        },
        //组件初始化完毕
        afterRender:function() {
            //切换到下一页
            //jquery对象的封装，$.fn.background = function(){}
            //jquery本身没有方法通过$.fn的方式追加上去，认为是插件方法
            $('#movedown').on('click',function () {
                console.log('开始点击');
                // e.stopPropagation();
                $.fn.fullpage.moveSectionDown();
            });

            //第八屏跟着鼠标移动
            // $('.screen08').on('mousemove',function (e) {
            //        console.log(e.clientX,e.clientY);
            //        $('.screen08 .hands').css({
            //           left:e.clientX,
            //           top:e.clientY
            //        });
            // });

            //重新开始
            $('.screen08 .again').on('click',function () {
            //    移除上面添加的now leave show 这三个类名
                $('.now ,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
            //    移除css属性，取消jquery中调用的fadein和fadeout等动画
            //    设置星星的时候添加了style属性，在这边移除
                $('.content [style]').removeAttr('style');
            //    跳转返回第一页
                $.fn.fullpage.moveTo(1);
            })
        },
        //离开某个页面触发的函数
        //有三个参数 index nextIndex direction  direction的值为up或者down
        onLeave:function (index,nextIndex,direction) {
            // if (index == 2 && nextIndex == 3){
            //    第二页到第三页
                $('.section').eq(index-1).addClass('leaved');
            // }
            if (index == 6 && nextIndex == 7){
                //进入第七个界面
                $('.screen07 .star').addClass('show');
                $('.screen07 .appraise').addClass('show');
                $('.screen07 .star img').each(function (i,item) {
                    $(this).css('transition-delay',i*0.5+'s')
                })
            }

            if (index == 7 && nextIndex == 8){
                //隐藏更多按钮
                $('.more').css({"display":"none"})
            } else {
                $('.more').css({"display":"block"})
            }
        }
    });
})
