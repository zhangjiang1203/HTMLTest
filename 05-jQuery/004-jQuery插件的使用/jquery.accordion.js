$.fn.accordion = function (colors,width) {
    //颜色和宽度都是选填的值,都有默认值
    colors = colors || [];
    width = width || 0;

    var lis = this.find('li');
    var boxWidth = this.width();
    var maxWidth = boxWidth - (lis.length-1)*width;
    var avgWidth = boxWidth / lis.length;

    lis.each(function (i,e) {
        $(e).css('backgroundColor',colors[i]);
    })
    //添加动画
    lis.on('mouseenter',function () {
        $(this).stop().animate({width:maxWidth}).siblings().stop().animate({width:width});
    })

    lis.on('mouseleave',function () {
        lis.stop().animate({width:avgWidth});
    })

    return this;
}