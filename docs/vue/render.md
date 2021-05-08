## 函数渲染 & JSX

Vue 推荐在绝大多数情况下使用模版来创建你的 HTML，然而在一些场景中，你真的需要 JavaScript
的完全编程的能力。这时你可以用**渲染函数**，它比模版更接近编译器。

### render 函数写一个组件

```
Vue.component('anchored-heading', {
  render: function(createElement) {
    return createElement(
      'h' + this.level,   // 标签名称
      this.$slots.default // 子节点数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
```

### 节点、树及虚拟 DOM

模版

```
<h1>{{ blogTitle }}</h1>
```

或者渲染函数

```
render: function (createElement) {
  return createElement('h1', this.blogTitle)
}
```

`createElement`到底会返回什么呢？其实不是一个实际的 DOM 元素。它更准确的名字可能是
`createNodeDescription`因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，包括及
其子节点的描述信息。我们把这样的节点描述为**虚拟节点（virtual node）**，也常简写它为 VNode。
**虚拟 DOM**是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼

### createElement 的参数

如何在`createElement`函数中使用模版中的那些功能

```
createElement(
  // 第一个参数，必填项
  // string | object | function
  // 一个HTML标签名、组件选项对象，或者
  // resolve 了上述任何一种的一个 async 函数
  'div',

  // 第二个参数，可选
  // object
  // 一个与模版中 attribute 对应的数据对象
  {
    // ...
  },

  // 第三个参数，可选
  // string | Array
  // 子级虚拟节点，由`createElement()`构建而成
  // 也可以是文本虚拟节点
  [
    '先写一些文本',
    createElement('h1', '一则头条'),
    createElement(MyComponent, {
      props: {
        someProp: 'foobar'
      }
    })
  ]
)
```

#### 深入第二个参数

有一点需要注意，正如`v-bind:class`和`v-bind:style`在模版语法中会被特别对待一样，它们在
VNode 数据对象中也有对应的顶层字段。该对象也允许你绑定普通的 HTML attribute

```
{
  // 与 `v-bind:class`的API相同
  // 接受一个字符串、对象或对象和字符串组成的数组
  'class': {
    foo: true,
    bar: false
  },

  // 与`v-bind:style`的API相同
  // 接受一个字符串、对象或对象组成的数组
  style: {
    color: 'red',
    fontSize: '14px'
  },

  // 组件prop
  props: {
    myProp: 'bar'
  },

  // DOM property
  domProps: {
    innerHTML: 'baz'
  },

  // 事件监听器在 `on`内
  // 但不支持如`v-on:keyup.enter`这样的修饰器
  // 需要在处理器函数中手动检查 keyCode
  on: {
    click: this.clickHandler
  },

  // 仅用于组件，用于监听原生事件。
  nativeOn: {
    click: this.nativeClickHandler
  },

  // 作用域插槽的格式
  // name: props => VNode | Array<VNode>
  scopedSlots: {
    default: props => createElement('span', props.text)
  },

  // 如果组件是其它组件的子组件，需为插槽指定名称
  slot: 'name-of-slot',

  // 其它特殊顶层property
  key: 'myKey',
  ref: 'myRef'
}
```

### 使用 JavaScript 代替模版功能

```
<ul v-if="items.length">
  <li v-for="item in items">{{ item.name }}</li>
</ul>
<p v-else>No items found</p>
```

渲染函数

```
props: ['items'],
render: function(createElement) {
  if (this.items.length) {
    return createElement('ul', this.items.map(function(item) {
      return createElement('li', item.name)
    }))
  } else {
    return createElement('p', 'No items found')
  }
}
```

### 渲染函数中没有与`v-model`的直接对应，你必须自己实现相应的逻辑

```
props: ['value'],
render: function (createElement) {
  var self = this
  return createElement('input', {
    domProps: {
      value: self.value
    },
    on: {
      input: function(event) {
        self.$emit('input', event.target.value)
      }
    }
  })
}
```

这可以让你更好地控制细节

### JSX

如果你写了很多 `render`函数，可能会觉得下面这样的代码写起来很痛苦

```
createElement(
  'anchored-heading', {
    props: {
      level: 1
    }
  },
  [
    createElement('span', 'Hello'),
    'world!'
  ]
)
```

特别是对应模版如此简单的情况下

```
<anchored-heading :level="1">
  <span>Hello</span>world!
</anchored-heading>
```

有一个 Babel 插件，用于 Vue 中使用 JSX 语法，它可以让我们回到更接近于模版的语法上

```
import AnchoredHeading from './AnchoredHeading.vue'

new Vue({
  el: '#demo',
  render() {
    return (
      <AnchoredHeading level={1}>
        <span>Hello</span> world!
      </AnchoredHeading>
    )
  }
})
```
