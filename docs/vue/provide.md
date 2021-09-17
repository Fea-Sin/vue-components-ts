# provide/inject

> Vue 2.2.0 新增

这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，
并在其上下游关系成立的时间里始终生效。如果你熟悉 React，这与 React 的上下文特性很相似

`provide`选项应该是一个对象或返回一个对象的函数。该对象包含可注入其子孙的 property。
在该对象中你可以使用`ES2015 Symbols`作为 key，但是只在原生支持`Symbol`和`Reflect.ownKeys`
的环境下可工作

`inject`选项应该是

- 一个字符串数组，或
- 一个对象，对象的 key 是本地的绑定名，value 是：
  - 在可用的注入内容中搜索用的 key(字符串或 Symbol)，或
  - 一个对象，该对象的：
    - `from`property 是在可用的注入内容中搜索用的 key(字符串或 Symbol)
    - `default`property 是降级情况下使用的 value

> 提示：`provide`和`inject`绑定并不是可响应的。这是刻意为之。然而，如果你传入了
> 一个可监听的对象，那么其对象的 property 还是可响应的

示例

```js
// 父组件提供'foo'
var Provider = {
  provide: {
    foo: "bar",
  },
};

// 子组件注入'foo'
var Child = {
  inject: ["foo"],
  created() {
    console.log(this.foo); // => "bar"
  },
};
```

**使用一个注入的值作为一个 property 的默认值**

```js
const Child = {
  inject: ["foo"],
  props: {
    bar: {
      default() {
        return this.foo;
      },
    },
  },
};
```

**使用一个注入值作为数据入口**

```js
const Child = {
  inject: ["foo"],
  data() {
    return {
      bar: this.foo,
    };
  },
};
```

### 2.5.0+ 的注入可以通过设置默认值使其变成可选项

```js
const Child = {
  inject: {
    foo: { default: "foo" },
  },
};
```

如果它需要从一个不同名字的 property 注入，则使用`from`来表示其源 property:

```js
const Child = {
  inject: {
    foo: {
      from: "bar",
      default: "foo",
    },
  },
};
```

与 prop 的默认值类似，你需要对非原始值使用一个工厂方法:

```js
const Child = {
  inject: {
    foo: {
      from: "bar",
      default: () => [1, 2, 3],
    },
  },
};
```
