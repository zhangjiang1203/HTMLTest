//拿到里面的接口对象
//优先从缓存中加载
//a b 都已经加载过了 下次加载直接获取到里面的对象，不会再次加载
//这样是为了提高加载速度
require('./a')
require('./b')