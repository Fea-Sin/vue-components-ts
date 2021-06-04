## 高级类型

### 交叉类型(Intersection Types)

交叉类型是将多个类型合并为一个类型，这让我们可以把现有的多种类型叠加到一起成为一种类型，
它包含了所需的所有类型的特性

例如 Person & Serializable & Loggable 同时是 Person 和 Serializable 和 Loggable。
就是说这个类型的对象同时拥有这三种类型的成员

大多是在混入(mixins)或其它不适合典型面向对象模型的地方看到交叉类型的使用，在 JavaScript 里发生这种
情况场合很多

```ts
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}
```

### 联合类型（Union Types）

联合类型表示一个值是几种类型之一，我们用竖线`|`分割每个类型，所以`number | string | boolean`
表示一个值是`number`、`string`或`boolean`

如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员

```ts
interface Bird {
  fly();
  layEggs();
}
interface Fish {
  swim();
  layEggs();
}
function getSmallpet(): Fish | Bird {
  // ...
}
let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim(); // errors
```

这里的联合类型有点复杂，但是你很容易就习惯了，如果一个值的类型是`A | B`，我们能够确定的是它
包含了`A`和`B`共有的成员。这个例子里，Bird 具有一个`fly`成员，我们不能确定一个`Bird | Fish`
类型的变量是否有`fly`方法，如果变量在运行时是`Fish`类型，那么调用`pet.fly()`就出错了

### 类型保护与区分类型（Type Guards and Differentiating Types）

JavaScript 里常用来区分可能值的方法是检查成员是否存在，我们可以使用类型断言

```
let pet = getSmallPet();

if ((<Fish>pet).swim) {
  (<Fish>pet).swim()
} else {
  (<Bird>pet).fly()
}
```

### 用户自定义的类型保护

`typeof x === 'number'`，TypeScript 可以将它识别为一个类型保护

```ts
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got ${padding}`);
}
```

这些`typeof`**类型保护**只有两种形式能被识别`typeof v === "typename"`和`typeof v !== "typename"`
`typename`必须是`number`、`string`、`boolean`、`symbol`。但是 TypeScript 并不会阻止你与
其它字符串比较，语言不会把这些表达式识别为类型保护

### 可以为 null 的类型
