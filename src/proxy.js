// 加法乘法代理
var mult = function () {
  console.log('开始计算乘积');
  var a = 1;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return a;
};

var plus = function () {
  var a = 0;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a + arguments[i];
  }
  return a;
};

var createProxyFactory = function (fn) {
  var cache = {};
  return function () {
    var args = Array.prototype.join.call(arguments, ',');
    if (args in cache) {
      return cache[args];
    }
    return cache[args] = fn.apply(this, arguments);
  }
};

var proxyMult = createProxyFactory(mult),
  proxyPlus = createProxyFactory(plus);

proxyMult(1, 2, 3, 4)
proxyPlus(1, 2, 3, 4)



// 2上传文件代理
var synchronousFile = function (id) {
  console.log('开始同步文件，id 为: ' + id);
};


var proxySynchronousFile = (function () {
  var cache = [], // 保存一段时间内需要同步的 ID
    timer; // 定时器
  return function (id) {
    cache.push(id);
    if (timer) { // 保证不会覆盖已经启动的定时器
      return;
    }
    timer = setTimeout(function () {
      synchronousFile(cache.join(',')); // 2 秒后向本体发送需要同步的 ID 集合
      clearTimeout(timer); // 清空定时器
      timer = null;
      cache.length = 0; // 清空 ID 集合
    }, 2000);
  }
})(); 

proxySynchronousFile(1)
proxySynchronousFile(1)
proxySynchronousFile(1)
proxySynchronousFile(1)
