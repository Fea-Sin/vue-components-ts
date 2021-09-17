# Vue.extend()

使用基础`Vue`构造器，创建一个子类，参数是一个包含组件选项的对象

> `data`选项是特例，需要注意在`Vue.extend()`中它必须是函数

```js
// 创建构造器
var Profile = Vue.extend({
  template: `<p>{{firstName}} {{lastName}}</p>`,
  data: function () {
    return {
      firstName: "Walter",
      lastName: "White",
    };
  },
});

// 创建Profile实例，并挂载到一个元素
new Profile().$mount("#mount-point");
```

```
<div id="mount-point"></div>
```
