### 类语法组件（Class Component）

使用装饰器语法，Vue 组件可以用类的方式来写

```
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {}
```

### Data

初始的`data`可以声明为类的属性

```
@Component
export default class HelloWorld extends Vue {
  // 此时可以不写类型 string
  message: string = "hello world"
}
```

> **注意**
> TSLint Rule: no-inferrable-types
>
> Disallows explicit type declarations for variables or parameters initialized
> to a number, string, boolean
>
> 禁止对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
>
> 规则原理:
>
> Explicit tyepes where they can be easily inferred by the compiler make code more verbose
>
> 明确的类型容易地被编译器推断而出，避免代码冗长或冗余

不使用类的写法

```
export default {
  name: "HelloWorld",
  components: {},
  props: {},
  data() {
    return {
      message: "hello world"
    }
  },
  computed: {},
  methods: {},
  mounted() {
    console.log('component is mounted')
  }
}
```
