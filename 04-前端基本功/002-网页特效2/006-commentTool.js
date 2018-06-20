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