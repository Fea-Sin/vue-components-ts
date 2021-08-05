# ref

预期：`string`

`ref`被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的`$refs`对象上。
如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向
组件实例：

```js
// vm.$refs.p will be the DOM node
<p ref="p">hello</p>

// vm.$refs.child will be the child component instance
<child-component ref="child"></child-component>
```

当 `v-for`用于元素或组件的时候，引用信息将是包含 DOM 节点或组件实例的数组

**关于 ref 注册时间的说明**

因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们，它们还不存在。
