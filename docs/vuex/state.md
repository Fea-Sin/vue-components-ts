## State

Vuex 使用**单一状态树**，用一个对象就包含了全部的应用层级状态。这意味着，每个应用将
仅仅包含一个 store 实例。

- 主要问题是如何将状态和状态变更事件分布到各个子组件中

- 存储在 Vuex 中的`state`和 Vue 实例中的`data`遵循相同的规则，状态对象必须是纯粹（plain）的

### 在 Vue 组件中获得 state

Vuex 通过`store`选项，提供了一种机制将状态从根组件**注入**到每一个子组件中，前提需要
调用`Vue.use(Vuex)`

Vue 根实例中注册`store`选项，该 store 实例会注入到根组件下的所有子组件，且子组件能通过
`this.$store`访问到

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex({
  // state

  // actions
})

new Vue({
  el: '#app',
  store: store
})
```

组件中如何使用呢，由于 state 存储是响应式的，从 store 实例中读取状态最简单的方法
就是在**计算属性**中返回某个状态

```
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
```

### 辅助函数 mapState

当一个组件要获取多个状态的时候，将这些状态都声明为计算属性会重复写相同代码，使用`mapState`辅助
生成计算属性

mapState 函数返回一个对象，可以使用对象展开运算写法

```
import { mapState } from 'vuex'

computed: {
  localComputed() { /* ... */ },
  ...mapState({
    // 箭头函数可使代码更简练
    count: state => state.count

    // 传字符串参数'count' 等同于 `state => state.count`,
    countAlias: 'count',

    // 如何使用`this`获取组件数据
    countPlusLocalState(state) {
      return state.count + this.localCount
    }
  })
  // 当映射的计算属性名称与state的子节点名称相同时，可以给`mapState`传一个字符串数组
  ...mapState([
    'count',
    'otherState'
  ])
}
```
