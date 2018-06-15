function $(id) {
    return document.getElementById(id);
}

/*返回兼容的scrollTop和scrollLeft*/
function scroll() {
    if (window.pageXOffset != null){
        //ie9和其他浏览器
        return {
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    } else if (document.compatMode == 'CSS1Compat'){
        //检测是不是怪异模式的浏览器，就是没有申明<!DOCTYPE html>
        return {
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }else {
        //剩下是怪异浏览器模式
        return {
            left:document.body.scrollLeft,
            top:document.body.scrollTop
        }
    }
}


/*检测可视区域的屏幕宽度和高度*/
function client() {
    if (window.pageXOffset != null){
        //ie9和其他浏览器
        return {
            width:window.innerWidth,
            height:window.innerHeight
        }
    } else if (document.compatMode == 'CSS1Compat'){
        //检测是不是怪异模式的浏览器，就是没有申明<!DOCTYPE html>
        return {
            width:window.documentElement.clientWidth,
            height:window.documentElement.clientHeight
        }
    }else {
        //剩下是怪异浏览器模式
        return {
            width:document.body.clientWidth,
            height:document.body.clientHeight
        }
    }
}

/*根据属性获取对应的属性值*/
function getStyle(obj,attr) {
    if (obj.currentStyle){
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj,null)[attr];
    }
}
/*设置多个属性的动画，谁执行动画 json传入动画属性和目标值 fn函数体是
 * 动画执行完之后要执行的函数
 * fn的值可以为空*/
function  customBackAnimate(obj,json,fn) {
    //清除定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //定时器关闭的标识
        var flag = true;
        //获得属性值
        for (var attr in json){
            var current = parseInt(getStyle(obj,attr));
            var step = (json[attr] - current)/10;
            step =  step > 0 ? Math.ceil(step) : Math.floor(step);
            obj.style[attr] = current + step + 'px';

            console.log(current);
            if (current != json[attr]){
                //只要其中的一个不满足条件就不停止定时器
                flag = false;
            }
        }
        //清除定时器
        if (flag){
            clearInterval(obj.timer);
            console.log('自定义的动画定时器关闭了')
            if (fn){
                fn();//如果定义了fn就执行这个函数
            }
        }
    },30)
}