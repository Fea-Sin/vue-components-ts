## 监听事件

### 事件修饰符

在事件处理程序中调用`event.preventDefault()`或`event.stopPropagation()`是非常常见的需求。
尽管在回调方法中可以轻松实现，但更好的方式是，方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节

Vue.js 提供了**事件修饰符**，修饰符是由点开头的指令后缀

- `.stop` 阻止事件继续传播

- `.prevent` 阻止 target 对浏览器的默认行为

- `.capture` 事件监听器使用事件捕获模式

- `.self` 只当在 event.target 是当前元素自身时触发处理函数，事件不会从元素内部触发

- `.once` 其它事件修饰符只能对原生的 DOM 事件起修饰作用，once 修饰符还能被用到自定义的**组件事件**

- `.pssive` 2.3.0 新增，滚动事件会等待`onScroll`完成触发，使用 passive 修饰符，滚动事件的回调会立即触发。
  这个 passive 修饰符尤其能提升移动端的性能

修饰符可以串联使用

```
<a v-on:click.stop.prevent="doThat">hello world</a>
```

> 串联使用修饰符时，顺序很重要
>
> 不同的顺序会产生不同的效果
