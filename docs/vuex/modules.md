## Modules

使用单一状态树，应用的所有状态会集中到一个比较大的对象，当应用变得非常复杂时，store 对象就
变得相当臃肿

为了解决上述问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、
mutation、action、getter，甚至是嵌套子模块

```
const moduleA = {
  state: () => ({
    // some state
  }),
  mutations: {},
  actions: {}
}

const moduleB = {
  state: () => ({
    // some state
  }),
  mutations: {},
  actions: {}
}

const store = new Vuex.Store({
  // ...
  modules: {
    A: moduleA,
    B: moduleB
  }
})

// 使用方式
store.state.A // moduleA 的状态
store.state.B // moduleB 的状态
```

### 命名空间

默认情况下，模块内部的 mutation、action 和 getter 是注册在**全局命名空间**的，
这样使得多个模块能够对同一 mutation 或 action 作出响应

但是这样仅仅是将代码空间做了分隔，并未真正做到模块分隔

如果希望模块具有更高的封装度和复用性，可以通过在模块定义的时候添加`namespaced: true`
的方式使其成为命名空间模块。当模块被注册后，它的所有 mutation、action、getter 都会自动
根据模块注册的路径调整命名，模块内的 state 永远是嵌套的

```
const store = new Vuex.Store({
  modules: {
    account: {
      namespaced: true,
      // 模块内的state是嵌套的，使用`namespaced`属性不会对其产生影响
      state: () => ({ ... }),
      mutations: {
        login () { ... } // commit('account/login')
      },
      actions: {
        doSomeAction () { ... } // dispatch('account/doSomeAction')
      },
      modules: {
        // 进一步嵌套
        parts: {
          namespaced: true,
          state: () => ({ ... }),
          mutations: {
            splitCount () { ... } // commit('account/parts/splitCount')
          },
          actions: { ... }
        }
      }
    },
  }
})
```

启用了命名空间的 action 和 getter 会收到局部化的`dispatch`、`commit`、`getter`。

在使用模块内容时不需要在同一模块内额外添加空间名前缀，更改`namespaced`属性后不需要修改模块内的代码

### 在带命名空间的模块内访问全局内容

如果你希望使用全局 stat 和 getter，`rootStatee`和`rootGetter`会作为第三个和第四个参数传入
getter，也会通过`context`对象的属性传入 action

若需要在全局命名空间分发 action 或提交 mutation，将`{ root: true }`作为第三参数传给`dispatch`
或`commit`即可

```
modules: {
  foo: {
    namespaced: true,
    getters: {
      // 在这个模块的getter中，`getter`被局部化了
      someGetter (state, getters, rootState, rootGetters) {
        getters.someOtherGetter // 'foo/someOtherGetter'
        rootGetters.someOtherGetter // 'someOtherGetter'
      }
    },
    actions: {
      someAction ({ dispatch, commit, getters, rootGetters }) {
        // 在这个模块中，dispatch和commit也被局部化了
        // 他们可以接受`root`属性以访问 根dispatch和commit
        dispatch('someOtherAction') // -> 'foo/someOtherAction'
        dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

        commit('someMutation') // -> 'foo/someMutation'
        commit('some', null, { root: true }) // 'someMutation'
      },
      someOtherAction (ctx, payload) { ... }
    }
  }
}
```

### 在命名空间的模块注册全局 action

若需要在带命名空间的模块注册全局 action，你可添加`root: true`，并将这个 action 的定义放在`handler`中

```
const foo = {
  namespaced: true,
  actions: {
    someAction: {
      root: true,
      handler (ctx, payload) {
        // do something
      }
    }
  }
}
```

### 在组件中使用带命名空间的模块

当使用`mapState`、`mapMutations`、`mapActions`、`mapGetters`这些函数来绑定命名空间的模块时，
写起来比较繁琐

```
computed: {
  ...mapState({
    a: state => state.some.nested.module.a,
    b: state => state.some.nested.modulle.b
  })
},
methods: {
  ...mapActions([
    'some/nested/module/foo', // -> this['some/nested/module/foo']
    'some/nested/module/bar'  // -> this['some/nested/module/bar']
  ])
}
```

可以将模块的命名空间作为第一个参数传递给辅助函数，这样所有绑定都会自动将给模块作为
上下文

```
computed: {
  ...mapState('some/nested/module', {
    a: state => state.a,
    b: state => state.b
  }),
  methods: {
    ...mapActions('some/nested/module', [
      'foo', // -> this.foo()
      'bar'  // -> this.bar()
    ])
  }
}
```
