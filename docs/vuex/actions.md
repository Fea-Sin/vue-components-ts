## Actions

Action 可以包含任意异步操作

来看一个简单的实例

```
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
})
```

一个更加实际的例子，涉及异步调用 API 和多重 mutation

```
actions: {
  checkout ({ commit, state }, products) {
    // 把当前购物车的物品备份
    const cardItems = [...state.cart]

    // 发出结账请求，然后乐观地清空购物车
    commit(types.CHECKOUT_REQUEST)

    // 购物API接受一个成功回调和失败回调
    shop.buyProducts(
      products,
      // 成功操作
      () => commit(types.CHECKOUT_SUCCESS),
      // 失败操作
      () => commit(types.CHECKOUT_FAILURE, cardItems)
    )
  }
}
```

### 组合 Action

我们如何才能组合多个 action，以处理更加复杂的异步流程

首先，需要明白`store.dispatch`可以处理返回 Promise 的 action 函数，并且`store.dispatch`
仍旧返回 Promise

```
actions: {
  actionA ({ commit }) {
    setTimeout((resolve, reject) => {
      commit('someMutation')
      resolve()
    }, 1000)
  }
}
```

```
store.dispatch('acthionA')
  .then(() => {
    // do something
  })
```

利用`async/await`组合 action

```
actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA')
    commit('gotOtherData', await getOtherData())
  }
}
```

### 在组件中分发 Action

在组件中使用`this.$store.dispatch('xxx')`分发 action，或者使用`mapActions`辅助函数

```
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      // 将`this.increment()` 映射为 `this.$store.dispatch('increment')`
      'increment',

      // 也支持载荷，将`this.incrementBy(payload)` 映射为`this.$store.dispatch('incrementBy', payload)`
      'incrementBy',
    ]),
    ...mapActions({
      // 将`this.add()`映射为 `this.$store.dispatch('increment')`
      add: 'increment'
    })
  }
}
```
