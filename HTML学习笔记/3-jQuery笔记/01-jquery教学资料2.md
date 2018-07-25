## 1.jQuery操作样式

**1.1.css操作样式**
>1.css操作
>
>  功能 设置或者修改样式，操作的是style属性
> 
> 操作单个样式

```
//name:需要设置的样式名称
//value:对应的样式的值
//css(name,value)
$('name').css('backgroundColor','red');
```
>设置多个样式
>
>参数是一个对象，对象中包含了需要设置的样式名和样式值
>
>css(obj)

```
$('name').css({
    'backgroundColor':'red',
    'wodth':'200px',
    'height':'200px',
    'top':'10px',
 });
```
>获取样式
>
>参数就是样式的名称
>
>隐式迭代 
>
> * 设置操作的时候: 会给jq内部的所有对象都设置上相同的值
>
> * 获取的时候：只会返回第一个元素对应的值
>
>css(样式名称)

```
$('name').css('backgroundColor');
//例如
$('li').eq(0).css('fontSize','10px');
$('li').eq(1).css('fontSize','20px');
$('li').eq(2).css('fontSize','30px');
$('li').eq(3).css('fontSize','40px');
//返回第一个元素的设置的值
console.log($('li').css('fontSize'));
```

**1.2 class操作**

添加/删除类,在原来的类名中添加或者删除类名
>添加类 addClass(value)
>
>删除类 removeClass(value)

```
$('#id').removeClass('cc');
$('#id').addClass('cc');
```

hasClass(value)判断类,判断是否有这个类

```
$('#id').has Class('cc');
```

> 切换样式类

```
//name:需要切换的样式，如果有，移除该样式，否则添加该样式
toggleClass(name);
$('div').toggleClass('one');

```

#注意:添加class的时候不要添加.,已经是className了

## 2.jQuery属性操作
**2.1 attr操作**
>设置单个属性

```
attr(name,value)//name:需要设置的属性名 value:对应的属性值
$('img').attr('title','哎呦，不错哦');
$('img').attr('alt','哈哈哈');
```

>设置多个属性

```
参数就是一个对象，包含了需要设置的属性名和属性值，也可以自定义属性
attr(obj)
$('img').attr({
    title:'hahah',
    alt:'nihao',
    style:'opacity:.5',
});
```
>获取属性

```
attr(name)//name:需要获取的属性名;
$('img').attr('alt');
```

>对于bool类型的属性，不要用attr方法，应该用prop方法，两个用法类似

```
("#checkbox").prop('checked',true);
```

## 3.jQuery动画操作
**1.show && hide**
> show()和hide()用法一样 不传参数没有效果
> 
> $('div').show()
> 
> show(speed) speed:动画持续时间，可以是毫秒值还可以是固定字符串,有下面三个字符串
> 
> fast:200ms.  normal:400ms. slow:600ms
> 
> $('div').show(‘fast');
> 
> show添加回调函数
> 
> show([speed],[callback])
> 
> $('div').show(1000,function(){
> 
>    console.log('动画执行完了');
> 
> })

**2.滑入滑出动画**
> slideDown() 滑入  sliderUp() 滑出
> 
> slideDown如果不传参数，有一个默认的参数normal，slideUp没有默认值
> 
> slideToggle() 切换动画 如果是滑入就切换为滑出，反之相反


**3.淡入淡出效果**
> 淡入：fadeIn. 淡出:fadeOut. 切换:fadeToggle 用法和滑入滑出一样

**4.自定义动画**
> animate：自定义动画
> 
```
//params:要执行动画的css属性，带数字(必选)
//speed:动画事件
//easing:执行效果，默认为swing(缓动) 可以是linear(匀速)
//callback:动画执行完毕之后的回调函数
$('div').animate({params},[speed],[easing],[callback]);
```

**5.动画队列于停止动画**
> 在同一个元素上执行多个动画，那么对于这个动画来说，后面的动画会被放到动画队列中，等前面的动画执行完毕了才会执行

```
stop方法:停止动画效果
//clearQueue：是否清除队列 true false
//jumpToEnd:是否跳转到最终效果 true false
stop(clearQueue,junpToEnd) ;
//stop放在动画之前调用
$li.stop().animate({width:240});
```


 