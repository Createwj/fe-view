/**
 * 防抖
 *    1。事件被触发n秒后执行回调
 * **/
$(function () {
  function reduceExpenditure(fn, wait) {
    var timer = null;
    var startTime = Date.now();
    return function () {
      var curTime = Date.now();
      var remaining = wait - (curTime - startTime);
      var context = this;
      var args = arguments;
      clearTimeout(timer);
      if (remaining <= 0) {
        fn.apply(context, args);
        startTime = Date.now();
      } else {
        timer = setTimeout(fn, remaining);
      }
    };
  }
  var debounce = (() => {
    let timer = null;
    return (fn, duration) => function(...args){
      if(timer != null) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn(...args);
        timer = null;
      }, duration);
    }
  })();

  function add() {
    console.log('add')
  }
  function dcc() {
    console.log('dcc')
  }



  $('.btn').click(function () {
    reduceExpenditure(add,2000)()
    debounce(dcc,2000)()
  })
})




// 防抖  n秒内触发事件 只会执行一次  【触发高频事件】  主动 键盘等
function debounce(fn) {
  let timeOut = null;
  return function () {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      fn.apply(this,arguments)
    }, 500)
  }
}
//  多次触发事件 取消计时器重来




// 节流      【高频事件触发】   系统自己触发  手机尺寸变化
function ththrollle(fn) {
  let canRun = true;
  return function () {
    if(!canRun) return
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments)
      canRun = true
    },500)
  }
}

// 多次触发事件 只执行一次


































