## 插件

插件通常为 Vue 添加全局功能

- 添加全局方法或者 property

- 添加全局资源：指令/过滤器/过渡等

- 通过全局混入来添加一些组件选项

- 添加 Vue 实例方法，通过把它添加到`Vue.prototype`上实现

- 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如`vue-router`

### 使用插件

通过全局方法`Vue.use()`使用插件。它需要在你调用`new Vue()`启动应用之前完成

```
// MyPlugin
Vue.use(MyPlugin)

new Vue({
  // 组件选项
})
```

可以传入一个可选的对象

```
Vue.use(MyPlugin, { someOption: true })
```

`Vue.use`会自动阻止多次相同插件，届时即使多次调用也只会注册一次

Vue.js 官方提供了一些插件（如`vue-router`）在检测到`Vue`是可访问的全局变量时
会自动调用`Vue.use()`。然而在像 CommonJS 这样的模块环境中，你应该始终显式地调用`Vue.use()`

### 开发插件

Vue.js 的插件应该暴露一个`install`方法。这个方法的第一个参数时`Vue`构造器，第二个参数是
一个可选的选项对象

```
MyPlugin.install = function(Vue, options) {
  // 添加全局方法或property
  Vue.myGlobalMethod = function() {

  }

  // 添加全局资源

  // 注入组件选项
  Vue.mixin({
    created: function() {
      // 逻辑...
    }
  })

  // 添加实例方法
  Vue.prototype.$myMethod = function(methodOptions) {
    // 逻辑...
  }
}
```
