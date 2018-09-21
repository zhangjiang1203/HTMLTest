window.onload = function () {
//    区域滚动效果
    /*一个容器装着另一个容器的html*/
    //拿到大容器初始化
    new IScroll(document.querySelector('.jd_cateLeft'),{
        scrollX:false, //x方向滚动
        scrollY:true   //y方向滚动

    })

    new IScroll(document.querySelector('.jd_cateRight'),{
        scrollX: false,
        scrollY: true
    })
}