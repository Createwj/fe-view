
function defineReactive (obj, key, val) {
  console.log('defineReactive star')
  /* 一个Dep类对象 */
  const dep = new Dep();

  Object.defineProperty(obj, key, {
    enumerable: true,       /* 属性可枚举 */
    configurable: true,     /* 属性可被修改或删除 */
    get: function reactiveGetter () {
      /* 将Dep.target（即当前的Watcher对象存入dep的subs中） */
      dep.addSub(Dep.target);
      return val;         /* 实际上会依赖收集，下一小节会讲 */
    },
    set: function reactiveSetter (newVal) {
      if (newVal === val) return;

      console.log(newVal);
      /* 在set的时候触发dep的notify来通知所有的Watcher对象更新视图 */
      dep.notify();

    }
  });
  console.log('defineReactive end')
}

function observer (value) {
  if (!value || (typeof value !== 'object')) {
    return;
  }

  Object.keys(value).forEach((key) => {
    console.log('observer star')
    console.log(value, key, value[key])
    defineReactive(value, key, value[key]);
    console.log('observer end')
  });
}

class Dep {
  constructor () {
    /* 用来存放Watcher对象的数组 */
    this.subs = [];
  }

  /* 在subs中添加一个Watcher对象 */
  addSub (sub) {
    this.subs.push(sub);
  }

  /* 通知所有Watcher对象更新视图 */
  notify () {
    this.subs.forEach((sub) => {
      sub.update();
    })
  }
}

let uid = 0;
class Watcher {
  constructor () {
    this.id = ++uid;
    /* 在new一个Watcher对象时将该对象赋值给Dep.target，在get中会用到 */
    console.log('Watcher')
    console.log(Dep)
    console.log(Dep.target)
    console.log(this)
    Dep.target = this;
  }

  /* 更新视图的方法 */
  update () {
    console.log('watch' + this.id + ' update');
    queueWatcher(this);
  }
  run () {
    console.log('watch' + this.id + '视图更新啦～');
  }
}

Dep.target = null;

let has = {};
let queue = [];
let waiting = false;

function queueWatcher(watcher) {
  const id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    queue.push(watcher);

    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}
function flushSchedulerQueue () {
  let watcher, id;

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
  }

  waiting  = false;
}
let callbacks = [];
let pending = false;

function nextTick (cb) {
  callbacks.push(cb);

  if (!pending) {
    pending = true;
    setTimeout(flushCallbacks, 0);
  }
}

function flushCallbacks () {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

class Vue {
  /* Vue构造类 */
  constructor(options) {
    this._data = options.data;
    observer(this._data);
    /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
    new Watcher();
    /* 在这里模拟render的过程，为了触发test属性的get函数 */
    console.log('render~', this._data.test);
  }
}
let o = new Vue({
  data: {
    test: "I am test."
  }
});
o._data.test = "hello,world.";  /* 视图更新啦～ */
