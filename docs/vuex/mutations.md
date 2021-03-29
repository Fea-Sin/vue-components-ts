## Mutation

> Vuex 的 Mutation 就是 Redux 的 Action
>
> Redux dispatch Action
>
> Vuex commit Mutation
>
> **Action 分为两种**
>
> 一种是纯函数（reducers），必须是同步函数
>
> 另一种是有副作用的函数（effects），处理项目中的异步函数
>
> reducers 就是 Vuex 中的 mutations
>
> effects 就是 Vuex 中的 actions

更改 Vuex 的 store 中的状态的唯一方法是 commit Mutation，每个 Mutation 都有
一个字符串的**事件类型（type）**和一个回调函数（handler），这个回调函数就是我们
进行状态更改的地方，并且它会接收 state 作为第一个参数

```
// mutaion-types.js

export const SOME-MUTATION = 'SOME-MUTATION'
```

```
// store.js
import { SOME-MUTATION } from './mutation-types'

const store = new Vuex.Store({
  state: { ... },
  mutatons: {
    [SOME-MUTATION] (state) {
      // mutate state
    }
  }
})
```

上述实例，使用常量替代 mutation 事件类型，这在各种 Flux 实现中是很常见的模式，
这种模式在多人协作的大型项目中，这会很有帮助。如果你不喜欢，完全可以不这样做

更一般的情况是如下方式

```
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state, payload) {
      state.count += payload.amount
    }
  }
})
```

此时第二参数是载荷（payload），载荷是提交 Mutation 时传入的业务数据

```
store.commit('increment', {
  amount: 10
})
```

### Mutation 需要遵守 Vue 的响应规则

- 最好提前在你的 store 中初始化所需属性

- 当修改**引用数据**时，以新对象替换老对象，写法如下

```
mutations: {
  changeObjectValue (state) {
    state.obj = {
      ...state.obj,
      changeProp: 'new value',
      newProp: 123
    }
  }
}
```

### 在组件中提交 Mutation

在组件中使用 `this.$store.commit('xxx')`提交 Mutation，或者使用`mapMutations`
辅助函数

```
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      'increment',

      // mapMutations 也支持载荷
      // 将`this.incrementBy(payload)` 映射为 `this.$store.commit('incrementBy', payload)`
      'incrementBy'
    ]),
    ...mapMutations({
      // 将 `this.add` 映射为 `this.$store.commit('increment')`
      add: 'increment'
    })
    // 在local methods 中使用
    localMethod () {
      // do something
      this.incrementBy({
        prop: this.someValue
      })
    }
  }
}
```
