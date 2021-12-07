#### flex 用过哪些属性 flex-direction:

决定主轴的方向 row（默认值）：主轴为水平方向，起点在左端

row-reverse：主轴为水平方向，起点在右端

column：主轴为垂直方向，起点在上沿。

column-reverse：主轴为垂直方向，起点在下沿。

#### flex-wrap

换行 nowrap

不换行 wrap

第一行在上方 wrap-reverse

#### justify-content

flex-start（默认值）：左对齐
flex-end：右对齐
center
space-between：两端对齐，项目之间的间隔都相等。

space-around：每个项目两侧的间隔相等

#### align-items：定义在交叉轴上如何对齐

flex-start：交叉轴的起点对齐。

flex-end：交叉轴的终点对齐。

center：交叉轴的中点对齐

baseline: 项目的第一行文字的基线对齐。

stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高 度

### flex: 1 flex属性是flex-grow, flex-shrink 和 flex-basis的简写 0 1 auto

flex-grow：定义元素的放大比例，默认为0，即如果存在剩余空间，也不放大

flex-shrink：定义元素的缩小比例，默认为1，即如果空间不足，该项目将缩小

flex-basis：定义元素在主轴方向上的初始大小，默认为auto

### BFC 块级格式化上下文，是一个独立的渲染区域，让处于BFC内部的元素与外部的元素相互隔 离，使内外元素的定位不会相互影响

触发条件: float 属性不为 none
position 为 absolute 或
fixed display 为 inline-block， table-cell， flex， inline-flex overflow 不为 visible 规则:

属于同一个 BFC 的两个相邻 Box 垂直排列 属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠 BFC 中子元素的 margin box 的左边， 与包含块 (BFC) border box的左边相接 触 (子元素 absolute 除外) BFC 的区域不会与 float 的元素区域重叠 计算 BFC 的高度时，浮动子元素也参与计算 应用: 阻止margin重叠 自适应两栏布局 可以阻止元素被浮动元素覆盖

### BFC

`Block Formatting Context， 名为 "块级格式化上下文"。`

#### 触发BFC

- overflow: hidden
- display: inline-block
- position: absolute
- position: fixed
- display: table-cell
- display: flex

#### BFC规则

- BFC就是一个块级元素，块级元素会在 `垂直方向`一个接一个的排列
- BFC就是页面中的一个隔离的独立容器，容器里的标签不会影响到外部标签
- 垂直方向的距离由margin决定， 属于同一个BFC的两个相邻的标签外边距会发生重叠
- 计算BFC的高度时，浮动元素也参与计算






1.vue2和vue3双向绑定区别

ok

2.vue2和vue3使用上的区别


3.vue3里relative和ref的区别


4.vue2和vue3组件传值


5.闭包的理解


6.闭包项目中使用


7.节流和防抖

ok

8.for in 和 for of 区别

ok

- for in遍历对象，for of遍历除对象以外其他可迭代元素，for in 遍历索引，for of遍历值

9 实现继承的几种方式

ok

10.script标签设置defer和async区别

ok

11.从输入url到显示页面

ok

12.浏览器缓存机制和优先级

ok

13.项目性能优化

ok

14.node平常有用到吗？用来做什么

err

15.webpack打包优化，webpack分包有了解吗

ok

16.小程序用的原生还是框架，小程序和vue的区别

ok

17.小程序列表页进入详情页，做一些改动后返回列表页，如果局部更新

err

18.小程序登录实现原理

ok

19.Promise.all实现

ok

20.筛选数组重复项

ok



数组扁平化
1.递归
2.reduce
// 方法2
var arr = [1, [2, [3, 4]]];
function flatten(arr) {
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}
console.log(flatten(arr));//  [1, 2, 3, 4，5]
3.some
4.split+toString
5.flat
6.json + 正则