## keep-alive

keep-alive 是 Vue 内置组件

### 用法

`<keep-alive>`包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和`<transition>`相似`<keep-alive>`
是一个抽象组件，它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中

当组件在`keep-alive`内被切换，它的`activated`和`deactivated`这两个生命周期钩子函数会被对应执行

> 注意
> `keep-alive`是用在其一个直属的子组件被开关的情形。如果你在其中有`v-for`则不会工作
>
> 如果有上述的多个条件性的子元素，`keep-alive`要求同时只有一个子元素被渲染

`include` prop 允许组件有条件的缓存，以逗号分割的`name`字符串、正则表达式或以`name`为元素数组

这里的`name`是组件的`name`属性，一定要为组件显示定义`name`属性

> 注意，以`keep-alive`包裹`router-view`时
> 可以将路由的`name`属性的数组作为 `include`值，此时需要缓存的 router component
> 必须显示定义`name`属性
