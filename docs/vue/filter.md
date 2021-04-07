## 过滤器

Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方，
**双花括号插值**和**v-bind 表达式**（后者从 2.1.0+开始支持），过滤器应该被添加在
javaScript 表达式的尾部由"管道"符号指示

```
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bing`中 -->
<div v-bind:id="rawId | formatId"></div>
```

你可以在一个组件的选项中定义本地的过滤器

```
filters: {
  capitalize (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

或者在创建 Vue 实例之前全局定义过滤器

```
Vue.filter('capitalize', function(value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
```

**当全局过滤器和局部过滤器重名时，采用局部过滤器**

过滤器函数总接收表达式的值（之前操作链的结果）作为第一个参数。

过滤器可以串联

```
{{ message | filterA | filterB }}
```

过滤器是 javaScript 函数，因此可以接收参数

```
{{ message | filterA('foo', 'bar') }}
```

这里`filterA`被定义为接收三个参数的过滤器。其中`message`的值作为第一个参数，
普通字符串'foo'、'bar'作为第二个参数、第三个参数
