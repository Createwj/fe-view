/**
 *  发布订阅模式
 * **/

class EventEmitter {
  constructor() {
    // 事件对象 存放订阅的名字和事件
    this.events = {}
  }

  on(eventName, callback) {
    if(!this.events[eventName]){
      this.events[eventName] = [callback]
    }else{
      this.events[eventName].push(callback)
    }
  }

  emit(eventNames) {
    this.events[eventNames] && this.events[eventNames].forEach(cd => cd())
  }

  removeListener(eventName, callback) {
    if(this.events[eventName]) {
      this.events[eventName] && this.events[eventName].filter(cb => cb !== callback)
    }
  }

  once(eventName, callback) {
    let fn = () => {
      callback();
      this.removeListener(eventName, fn)
    }
  }
}

// 使用发布订阅
let em = new EventEmitter()
let workday = 0;

em.on('work', function (){
  workday++
  console.log('hard work for money')
})

em.once('love', function () {
  console.log('just love you')
})

function makeMoney(){
  console.log('make money for life')
}
em.on('money', makeMoney)


em.emit('work');
em.removeListener('work')
em.emit('love');
em.emit('money');
em.emit('work');



class EventEmitter {
  constructor() {
    // 事件对象 存放订阅的名字和事件
    this.events = {}
  }

  on(eventName, callback) {
    if(!this.events[eventName]){
      this.events[eventName] = [callback]
    }else{
      this.events[eventName].push(callback)
    }
  }

  emit(eventNames) {
    this.events[eventNames] && this.events[eventNames].forEach(cd => cd())
  }

  removeListener(eventName, callback) {
    if(this.events[eventName]) {
      this.events[eventName] && this.events[eventName].filter(cb => cb !== callback)
    }
  }

  once(eventName, callback) {
    let fn = () => {
      callback();
      this.removeListener(eventName, fn)
    }
  }
}

class event{
  constructor() {
    this.events = {}
  }
  on(e, callback) {
    if(!this.events[e]){
        this.events[e] = [callback]
    }else{
      this.events[e].push(callback)
    }
  }
  emit(e) {
    if(this.events) {
      this.events[e] && this.events[e].forEach(cd => cd())
    }
  }
  remove(e, callback) {
    this.events[e] && this.events[e].filter(cb => cb!== callback )
  }
}

// npm 懒加载实现
// script 放头部不影响加载
// 首屏加载优化
// 按需加载
// 触发bfc的几种方式
// box-size // js获取的offerWidth的数值是啥
