/**
 * 1. 原型链继承
 * 被多个继承 容易相互影响
 * **/

function Persion() {
  this.name = 'params';
  this.age = 18;
  this.play = [1,2,3,4];
}
function Child1(){
  this.typev= 'child1'
}
Child1.prototype = new Persion();
console.log(new Child1());

var s1 = new Child1();
var s2 = new Child1();

// 不是引用类型正常使用
s1.age = 81;
console.log(s1.age)
console.log(s2.age)
// 引用类型 出现问题
s1.play.push(123);
console.log(s1.play)
console.log(s2.play)
/**
************************************************* 上诉为原型链继承 出现问题 【无法解决原型属性共享问题】 ********************************************************
 * **/

function Persion1() {
  this.name = 'persion1'
}
Persion1.prototype.getName = function(){
  return this.name;
}

function Childer1(){
  Persion1.call(this)
  this.type = 'childer1'
}
var s3 = new Childer1();
var s4 = new Childer1();
console.log(s3)
console.log(s4)
console.log(s4.getName()) // 报错

/**
 * 虽然能拿到父类的属性 但是无法拿到父类原型上面绑定的方法
 ************************************************* 构造函数继承 缺点【无法继承父类原型的方法】 ********************************************************
 * **/

function Parent3 () {
  this.name = 'parent3';
  this.play = [1, 2, 3];
}
Parent3.prototype.getName = function () {
  return this.name;
}
function Child3() {
  // 第二次调用 Parent3() 此处继承了属性
  Parent3.call(this);
  this.type = 'child3';
}

// 第一次调用 Parent3()   此处继承了原型上的方法
Child3.prototype = new Parent3();

// 手动挂上构造器，指向自己的构造函数
Child3.prototype.constructor = Child3;


// test 测试
var s3s = new Child3();
var s4s = new Child3();
s3s.play.push(4);
console.log(s3s.play, s4s.play);  // 不互相影响
console.log(s3s.getName()); // 正常输出'parent3'
console.log(s4s.getName()); // 正常输出'parent3'

/**
 * 通过Persion3.call(this) 来继承父类的属性
 * 通过改变子类的原型new Parent3() 来继承父类的方法
 *
 ************************************************* 组合继承 【解决了混乱问题 但是调用了两次 浪费性能】 ********************************************************
 * **/

function Parent4 () {
  this.name = 'parent3';
  this.play = [1, 2, 3];
}
Parent4.prototype.getName = function () {
  return this.name;
}
function Child4() {
  // 第二次调用 Parent3() 此处继承了属性
  Parent4.call(this);
  this.type = 'child3';
}

// 第一次调用 Parent3()   此处继承了原型上的方法
Child4.prototype = Object.create(Parent4);

// 手动挂上构造器，指向自己的构造函数
Child4.prototype.constructor = Child4;

var s3sa = new Child4();
var s4sa = new Child4();
s3sa.play.push(4);
console.log(s3sa.play, s4sa.play);  // 不互相影响
console.log(s3sa.getName()); // 正常输出'parent3'
console.log(s4sa.getName()); // 正常输出'parent3'

/**
 *
 ************************************************* 原型式继承 【JavaScript 的普通对象继承 Object.create 】 ********************************************************
 * **/


function clone (parent, child) {
  // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

function Parent6() {
  this.name = 'parent6';
  this.play = [1, 2, 3];
}
Parent6.prototype.getName = function () {
  return this.name;
}
function Child6() {
  Parent6.call(this);
  this.friends = 'child5';
}

clone(Parent6, Child6);

Child6.prototype.getFriends = function () {
  return this.friends;
}

let person6 = new Child6();
console.log(person6);
console.log(person6.getName());
console.log(person6.getFriends());



/**
 *
 ************************************************* 寄生组合式继承 【JavaScript 的普通对象继承 Object.create 】 ********************************************************
 * **/
