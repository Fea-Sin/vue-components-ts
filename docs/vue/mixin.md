## 混入

混入（mixin）提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含
任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混合进入该组件本身的选项

```
// 定义一个混入对象
var myMixin = {
  created () {
    this.hello()
  },
  methods: {
    hello () {
      console.log('hello from mixin')
    }
  }
}

// 定义一个使用混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})

var component = new Component()
```

### 选项合并

当组件和混入对象有同名选项时，这些选项将以恰当的方式进行合并

- 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先

- 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用

```
var mixin = {
  created () {
    console.log('混入对象的钩子被调用')
  }
}

new Vue({
  mixins: [mixin],
  created () {
    console.log('组件钩子被调用')
  }
})

// => 混入对象的钩子被调用
// => 组件钩子被调用
```

- 值为对象的选项，例如`methods`、`components`和`directives`，将被合并为同一个对象。
  两个对象键名冲突时，取组件对象的键值对
  > `Vue.extend()`也使用同样的策略进行合并

### 全局混入

混入也可以进行全局注册，使用时格外小心，一旦使用全局混入，它将影响每一个之后创建的 Vue 实例。
使用恰当时，这可以用来为自定义选项注入处理逻辑

```
Vue.mixin({
  created () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})

new Vue({
  myOption: 'hello!'
})
// => hello
```

> 谨慎使用全局混入，因为它会影响每个单独创建的 Vue 实例（包括第三方组件）
> 大多数情况下，只应该应用于自定义选项
