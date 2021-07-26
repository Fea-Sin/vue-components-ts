### @Prop

@Prop(options: (PropOptions | Constructor[] | Constructor) = {})
@Prop 装饰器接收一个参数，这个参数有三种写法

- Constructor，例如 String、Number、Boolean 等，指定 prop 的类型
- Constructor[]，指定 prop 的可选类型
- PropOptions，可以使用以下选项：type、default、required、validator

```
import { Vue, Component, Prop } from "vue-property-decorator"

@Component
export default class YourComponent extends Vue {
  @Prop(Number) private propA: number | undefined
  @Prop({default: "default value"}) readonly propB!: string
  @Prop([String, Boolean]) private propC: string | boolean | undefined
}
```
