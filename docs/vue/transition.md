## 进入/离开 & 列表过渡

### 概述

Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。包括下列工具

- 在 CSS 过渡和动画中自动应用 class

- 可以配合使用第三方动画库，如`Animate.css`

- 在过渡钩子函数中使用 JavaScript 直接操作 DOM

- 可以配合使用第三方 JavaScript 动画库，如`Velocity.js`

### 单元素/组件的过渡

Vue 提供了`transition`的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡

- 条件渲染（使用 v-if）

- 条件展开（使用 v-show）

- 动态组件

- 组件根节点

当插入或删除包含在`transition`组件中的元素时，Vue 将会做以下处理

- 自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名

- 如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用

- 如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作（插入/删除）在下一帧
  中立即执行。（此指浏览器逐帧动画机制，和 Vue 的`nextTick`概念不同）

典型的例子

```
<div id='demo'>
  <button v-on:click='show = !show'>toggle</button>
  <transition name='fade'>
    <p v-if='show'>hello</p>
  </transition>
</div>

new Vue({
  el: '#demo',
  data: {
    show: true
  }
})

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
```

### 过渡类名

- v-enter

- v-enter-active

- v-enter-to

- v-leave

- v-leave-active

- v-leave-to

### 过渡模式

同时生效的进入和离开的过渡不能满足所有要求，所以 Vue 提供了**过渡模式**

- `in-out`新元素先进行过渡，完成之后当前元素过渡离开

- `out-in`当前元素先进行过渡，完成之后新元素过渡进入

```
<transition name='fade' mode='out-in'>
</transition>
```
