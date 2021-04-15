## 插槽

### 插槽内容

Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 Web Components 规范草案，将`<slot>`
元素作为承载分发内容的出口

简单实例：`<navigation-link></navigation-link>`

```vue
<a v-bind:href="url" class="nav-link">
  <slot></slot>
</a>
```

插槽内可以包含任何模版代码，甚至其它的组件
如果`<navigation-link>`的`template`中没有包含一个`<slot>`元素，则该组件起始标签和结束标签
之间的任何内容都会被抛弃

### 编译作用域

```vue
<navigation-link url="/profile">
  Logged in as {{ user.name }}
</navigation-link>
```

该插槽跟模版的其它地方一样可以访问相同的实例 property，而不能访问`<navigation-link>`的作用域，例如
`url`是访问不到的

请记住，一条规则

> 父模版里的所有内容都在父级作用域中编译，子模版里的所有内容都在
> 子作用域中编译

### 后备内容

有时为一个插槽设置默认内容是很有用的，它只会在没有提供内容的时候被渲染

我们把后备内容放在`<slot>`标签内

```
<button type='submit'>
  <slot>Submit</slot>
<button>
```

### 具名插槽

有时候我们需要多个插槽，对于这样的情况，`<slot>`元素有一个特殊的 attribute:`name`，这个 attribute 可以
用来定义额外的插槽

如下组件`<base-layout>`

```
<div class='container'>
  <header>
    <slot name='header'></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name='footer'></slot>
  </footer>
</div>
```

一个不带`name`的`<slot>`出口会带有隐含的名字`default`

在向具名插槽提供内容的时候，我们可以在一个`<template>`元素上使用`v-slot`指令，并以`v-slot`的参数
的形式提供其名称

```vue
<base-layout>
  <template v-slot:header>
    <h1>Here might be page title</h1>
  </template>

  <p>A paragraph for the main content</p>
  <p>And another one</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

### 作用域插槽

有时让插槽内容能够访问子组件中才有的数据是很有用的

**子元素**

```
<span>
  <slot v-bind:user='user'>
    {{  user.lastName }}
  </slot>
</span>
```

为了让`user`在父级的插槽中可用，我们将`user`作为`<slot>`元素的一个 attribute
绑定

绑定在`<slot>`元素上的 attribute 被称为**插槽 prop**，我们可以
使用带值的`v-slot`来定义我们的插槽 prop 的名字

**父元素**

```vue
<current-user>
  <template v-slot:default='slotProps'>
    {{ slotProp.user.firstName }}
  </template>
</current-user>
```
