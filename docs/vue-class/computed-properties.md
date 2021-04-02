## 计算属性

计算属性可以声明为 class 的 `getter/setter`属性

```
@Component
export default class HelloWorld extends Vue {
  firstName = 'John'
  lastName = 'Doe'

  // 声明计算属性 getter
  get name() {
    return this.firstName + ' ' + this.lastName
  }
}
```
