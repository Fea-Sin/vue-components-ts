## VUE + TS

`vue-property-decorator` + `TS`

### 类组件

```vue
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {}
</script>
```

### Use data with TypeScript

```vue
<script lang="ts">
@Component
export default class HelloWorld extends Vue {
  msg: string = "welcome to my app";
  list: Array<object> = [
    {
      name: "Preetish",
      age: 26,
    },
  ];
}
</script>
```

等价的 js 代码

```vue
<script>
export default {
  data() {
    return {
      msg: "welcome to my app",
      list: [
        {
          name: "Preetish",
          age: 26,
        },
      ],
    };
  },
};
</script>
```

### Use props with TypeScript

```vue
<script lang="ts">
import { Component, Vue Prop } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() msg!: string
  @Prop({ default: 'John doe' }) name: string
  @Prop({ required: true }) age: number
  @Prop(String) address: string
  @Prop({ require: false, default: 'Developer' }) job: string
}
</script>
```

等价的 js 代码

```vue
<script>
export default {
  props: {
    msg,
    name: {
      default: "John doe",
    },
    age: {
      required: true,
    },
    address: {
      type: String,
    },
    job: {
      required: false,
      default: "Developer",
    },
  },
};
</script>
```

### Use computed properties

```vue
<script lang="ts">
export default class HelloWorld extends Vue {
  get fullName(): string {
    return this.first + " " + this.last;
  }
  set fullName(newValue: string) {
    let names = newValue.split(" ");
    this.first = names[0];
    this.last = names[names.length - 1];
  }
}
</script>
```

等价的 js 代码

```vue
<script>
export default {
  computed: {
    fullName: {
      get: function () {
        return this.first + " " + this.last;
      },
      set: function () {
        let names = newValue.split(" ");
        this.first = names[0];
        this.last = names[names.length - 1];
      },
    },
  },
};
</script>
```

### Use methods with TypeScript

```vue
<script lang="ts">
export default class HelloWorld extends Vue {
  clickMe(): void {
    console.log(this.addNum(4, 9));
  }
  addNum(num1: number, num2: number): number {
    return num1 + num2;
  }
}
</script>
```

等价的 js 代码

```vue
<script>
export default {
  methods: {
    clickMe() {
      console.log(this.addNum(4, 9));
    },
    addNum(num1, num2) {
      return num1 + num2;
    },
  },
};
</script>
```

### 生命周期 Hooks

一个 Vue component 有 8 个声明周期 hooks，包括`created`、`mounted`等等
他们声明为普通的 class methods，生命周期钩子是自动被调用的，他们既不需要参数，也不会返回值，
所以他们不需要 typing arguments，return types

```ts
export default class HelloWorld extends Vue {
  created() {
    // do something
  }

  mounted() {
    // do something
  }

  beforeUpdate() {
    // do something
  }
}
```

等价的 js 代码

```js
export default {

  created() {
    // do something
  }
  mounted() {
    // do something
  }
  beforeUpdate() {
    // do something
  }

}
```
