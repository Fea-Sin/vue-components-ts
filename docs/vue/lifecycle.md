## Vue 生命周期

每个 Vue 实例在被创建时都要经历一些列的初始化过程，需要设置数据监听、编译模版、将实例挂载到 DOM
并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，这给了用户在不同
阶段添加自己的代码的机会

- created

- mounted

- updated

- destroyed

> 不要在选项 property 或回调上使用 **箭头函数**
>
> created: () => console.log(this.a)
>
> vm.$watch('a', newValue => this.myMethod())
