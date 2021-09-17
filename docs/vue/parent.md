# parent

指定已创建的实例之父实例，在两者之间建立父子关系。子实例可以用`this.$parent`访问
父实例，子实例被推入父实例的`$children`数组中

> 节制地使用`$parent`和`$children`它们的主要目的是作为访问组件的应急方法。更推荐用
> props 和 events 实现父子组件通信

### vm.$parent

- 类型：`Vue instance`
- 只读

父实例，如果当前实例有的话

### vm.$root

- 类型：`Vue instance`
- 只读

当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己

### vm.$children

- 类型：`Array<Vue instance>`
- 只读

当前实例的直接子组件。需要注意`$children`并不保证顺序，也不是响应式的。如果你发现自己正在尝试使用
`$children`来进行数据绑定，考虑使用一个数组配合`v-for`来生成子组件，并且使用 Array 作为真正的来源
