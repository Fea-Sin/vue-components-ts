### @Component

@Component(options: ComponentOptions = {})

@Component 装饰器可以接收一个对象作为参数，可以在对象中声明 components、filters、
directives 等未提供装饰器的选项，也可以声明 computed、watch 等

```
import { Component, Vue } from "vue-property-decorator"

@Component
export default class ComponentName extends Vue {
  beforeRouteLeave(to: any, from: any, next: any) {
    console.log('beforeRouteLeave');
    next();
  }
}
```
