# 侦听器

类型： `{ [key: string]: string | Function | Object | Array }`

一个对象，键是需要观察的表达式，值是对应的回调函数。值也可以是方法名，或者包含选项的对象。
Vue 实例将会在实例化时调用`$watch()`，遍历 watch 对象的每一个 property

示例：

```js
var vm = new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      f: {
        g: 5,
      },
    },
  },
  watch: {
    a: function (val, oldVal) {
      console.log(`new: ${val}, old: ${oldVal}`);
    },
    // 方法名
    b: "someMethod",
    // 该回调会在被侦听的对象的 property 改变时被调用，无论其嵌套的多深
    c: {
      handler: function (val, oldVal) {
        /* ... */
      },
      deep: true,
    },
    // 该回调将会在侦听开始之后被立即调用
    d: {
      handler: "someMethod",
      immediate: true,
    },
    // 你可以传入回调数组，它们会被逐一调用
    e: [
      "handle1",
      function handle2(val, oldVal) {
        /* ... */
      },
      {
        handler: function handle3(val, oldVal) {
          /* ... */
        },
        /* ... */
      },
    ],
    // watch vm.e.f value
    "e.f": function (val, oldVal) {
      /* ... */
    },
  },
});
```

**注意**

不应该使用箭头函数来定义 watch 函数

`searchQuery: newValue => this.updateAutocomplete(newValue)`

原因是箭头函数绑定了父级作用域的上下文， 所以`this`将不会按照期望指向 Vue 实例
