## vm.$nextTick([callback])

将回调延迟到下次 DOM 更新循环之后执行，在修改数据之后立即使用它，然后等待 DOM 更新。
它跟全局方法`Vue.nextTick`一样，不同的是回调的`this`自动绑定到调用它的实例上

> 2.1.0 起新增，如果没有提供回调，则返回一个 Promise

```
new Vue({
  // ...
  methods: {
    example: function() {
      // 修改数据
      this.message = 'change'
      // DOM 还没有更新
      this.$nextTick(function() {
        // DOM 现在更新了
        // `this`绑定到当前实例
        this.doSomethingElse()
      })
    }
  }
})
```
