$.fn.bgColor = function (color) {
    this.css('backgroundColor',color);
    //返回自己，可以做链式
    return this;
}