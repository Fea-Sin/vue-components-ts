# @Wtach

@Watch(path: string, options: WatchOptions = {}) decorator

```js
import { Vue, Component, Watch } from "vue-property-decorator";

@Component
export default class MyComponent extends Vue {
  @Watch("child")
  onChildChange(val: string, oldVal: string) {}

  @Watch("person", { immediate: true, deep: true })
  onPersonChanged1(val: Person, oldVal: Person) {}

  @Watch("person")
  onPersonChanged2(val: Person, oldVal: Person) {}
}
```

等价于

```js
export default {
  watch: {
    child: [
      {
        handler: "onChildChanged",
        immediate: false,
        deep: false,
      },
    ],
    person: [
      {
        handler: "onPersonChanged1",
        immediate: true,
        deep: true,
      },
      {
        handler: "onPersonChanged2",
        immediate: false,
        deep: false,
      },
    ],
  },
  methods: {
    onChildChanged(val, oldVal) {},
    onPersonChanged1(val, oldVal) {},
    onPersonChanged2(val, oldVal) {},
  },
};
```
