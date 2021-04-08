## 概述

用 Vue.js + Vue Router 创建单页应用，感觉很自然，使用 Vue.js 我们已经可以通过组合组件来组成应用
程序，当你要把 Vue Router 添加进来，我们需要做的是，将组件（components）映射到路由（routes），然后
告诉 Vue Router 在哪里渲染它们

```
// 用模块化机制编程
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 定义路由
// 每个路由应该映射一个组件，其中component可以是
// 通过Vue.extend() 创建的组件构造器
// 或者，只是一个组件配置对象
const routes = [
  {
    path: '/foo',
    component: Foo
  },
  {
    path: '/bar',
    component: Bar
  }
]

// 创建 router 实例，然后传 routes 配置
const router = new VueRouter({
  routes
})

// 创建和挂载根实例
// 通过 router 配置参数注入路由
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')
```

通过注入路由器，我们可以在任何组件内通过`this.$router`访问路由器，也可以通过
`this.$route`访问当前路由

router 实例和`this.$router`使用起来完全一样，我们使用`this.$router`的原因
是我们不想在每个独立需要封装路由的组件中都导入路由
