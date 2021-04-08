## 计算属性和侦听器

模版内的表达式非常便利，但对于复杂逻辑，应当使用**计算属性**

```

```

### 计算属性混存 vs 方法

我们可以通过在表达式中调用方法来达到相同于 计算属性 的效果

我们可以将同一个函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同。

### 计算属性 vs 侦听属性

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：**侦听属性**。当你有一些数据需要
随着其他数据变动而变动时，你很容易滥用`watch`，通常更好的做法是使用计算属性而不是命令式`watch`回调

细想以下这例子

```
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```

上面代码是命令式且重复的，将它与计算属性的版本进行比较

```
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```

### 计算属性的 setter

计算属性默认只有 getter，不过在需要时可以提供一个 setter

```
computed: {
  fullName: {

    // getter
    get () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

现在运行`vm.fullName = 'John Doe'`时，setter 会被调用，`vm.firstName`和`vm.lastName`也会相应
地被更新

## 侦听器

虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过`watch`
选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销比较大的操作时，
这个方式是最有用的

```
<div id="watch-example">
  <p>
    Ask a yes/no question
  </p>
  <p>{{ answer }}</p>
</div>
```

```
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a qustion'
  },
  watch: {
    // 如果`question`发生改变，这个函数就就会运行
    question (newQuestion, oldQuestion) {
      // 逻辑
      // 此时的很多逻辑，计算属性是无法做到的
    }
  }
})
```
