## Vue 组件

组件是可复用的 Vue 实例，且带有一个名字，我们可以在一个通过`new Vue`创建的 Vue 根
实例中，把这个组件作为自定义元素来使用。

组件是可复用的 Vue 实例，所以它们与`new Vue`接收相同的选项，例如`data`、`computed`、
`watch`、`watch`、`methods`以及生命周期钩子等。仅有的例外是想`el`这样根实例特有的选项。

### 监听子组件事件

在我们开发组件时，它的一些功能可能要求我们和父级组件进行沟通。

### 自定义组件的 v-model

一个组件上的`v-model`默认会利用名为`value`的 prop 和名为`input`的事件，但是像单选框、复选框等
类型的输入控件可能会将`value`attribute 用于不同的目的。`model`选项可以用来避免这样的冲突

```
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      :checked="checked"
      @:change="$emit('change', $event.target.checked)"
    />
  `
})
```
