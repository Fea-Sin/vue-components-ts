# updated

类型： `function`

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，
你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用`计算属性`或`watcher`取代。

**注意**

`update`不会保证所有的子组件也都一起被重绘，如果希望等到整个视图都重绘完毕，可以在`update`里
使用`vm.$nextTick`

```js
updated: function() {
  this.$nextTick(function() {
    // Code that will run only after the
    // entire view has been re-rendered
  })
}
```

该钩子在服务端渲染期间不被调用
