window.onload = function () {

    $('rotate').onmouseover = function () {
        customBackAnimate($('rotate_arrow'),{'opacity':100},30);
    }

    $('rotate').onmouseout = function () {
        animate($('rotate_arrow'),{'opacity':0});
    }

    //  存储了每个图片的信息
    var json = [
        {
            width:400,
            top:0,
            left:400,
            opacity:10,
            z:1
        },
        {   //  1
            width:400,
            top:20,
            left:50,
            opacity:20,
            z:2
        },
        {  // 2
            width:600,
            top:70,
            left:0,
            opacity:80,
            z:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            z:4
        },
        {  // 4
            width:600,
            top:70,
            left:600,
            opacity:80,
            z:3
        },
        {   //5
            width:400,
            top:20,
            left:750,
            opacity:20,
            z:2
        }
    ];
    //图片展示
    var lis = $('showimage').children;

    //按钮的遍历
    var arrs = $('rotate_arrow').children;
    var speed = true;//控制动画的节奏，动画没有结束之前不能切换按钮
    changeImage();
    for (var k in arrs){
        arrs[k].onclick = function () {
            if (this.className == 'prev'){
                //限制连续点击，动画过快
                if (speed == true){
                    changeImage(false);
                    speed = false;
                }
            } else {
                if (speed == true){
                    changeImage(true);
                    speed = false;
                }
            }
        }
    }
    //修改图片显示
    function changeImage(flag) {
        //判断点击的是左侧还是右侧按钮
        if (flag){
            //删除json最后一个数据 并把最后一个添加到json的第一个位置
            json.unshift(json.pop());
        } else {
            //删除json的第一个数据，并把第一个数据添加到json的最后一个位置
            json.push(json.shift());
        }
    //    for执行json添加动画
        for (var i = 0;i < json.length; i++){
            customBackAnimate(lis[i],{
                width:json[i].width,
                top:json[i].top,
                left:json[i].left,
                opacity:json[i].opacity,
                zIndex:json[i].z,
            },10,function () {
                //函数执行完毕,设置限制速度值为true
                speed = true;
            })
        }
    }
    //每个li标签在上面都是绝对定位的标签
    //动画设置就是设置每个li的位置 大小 层级 透明度

}