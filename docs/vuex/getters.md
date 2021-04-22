## Getters

Vuex 允许我们在 store 中定义"getter"（可以认为是 store 的计算属性）。就像计算属性一样，
getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算

Getter 接受 state 作为其第一个参数

```
const store = new Vuex.store({
  state: {
    todos: [
      { id: 1, text: 'one', done: true },
      { id: 2, text: 'two', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})
```

Getter 也可以接受其它 getter 作为第二个参数

```
getters: {
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}
```

## 在组件中使用

```
store.getters.doneTodoCount // 1
```

```
computed: {
  doneTodosCount() {
    return this.$store.getters.doneTodoCount
  }
}
```

### mapGetters 辅助函数

`mapGetters`辅助函数仅仅是将 store 中的 getter 映射到局部计算属性

```
export default {

  // ...
  computed: {
    ...mapGetters([
      'doneTodosCount'
      'anotherGetter'
    ])
  }
}
```

给 getter 属性另取一个名字，使用对象形式

```
...mapGetters({
  doneCount: 'doneTodosCount'
})
```
