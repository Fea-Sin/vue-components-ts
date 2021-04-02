### Hooks

`data`、`render`和所有的 Vue 声明周期 hooks 都可以直接定义为 class prototype methods，
但是不能用实例（instance）调用，在定义自己的方法时避免使用这些保留的生命周期 hooks 名称

```
@Component
export default class HelloWorld extends Vue {
  // mounted lifecycle hook
  mounted() {
    console.log('mounted')
  }

  // render function
  rendre() {
    return <div>Hello World</div>
  }
}
```

### Additional Hooks

如果使用 Vue plugins 像 Vue Router，你需要在 class component 中处理
插件注入的 hooks，`Component.registerHooks`可以注册相应的 hooks

```
// class-component-hooks.js
import { Component } from 'vue-class-component'

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])
```

注册插件 hooks 之后，hooks 可以定义为 class prototype methods 被使用

```
@Component
export default class HelloWorld extends Vue {
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter')
    next()
  }

  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  }

  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')
    next()
  }
}
```

推荐将注册代码分离在单独的文件，因为注册代码执行需要在所有组件定义之前。
为了确保执行顺序，将`import`代码写在 main 文件的顶部

```
// main.js

// make sure to register before importing any components

import './class-component-hooks'

import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  render: h => h(App)
})

```
