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

TypeScript 具有两种特殊的类型，`null`和`undefined`，它们分别具有值 null 和 undefined。
默认情况下，类型检查器认为`null`和`undefined`可以赋值给任何类型。`null`和`undefined`是所有
其它类型的一个有效值。

`--strictNullChecks`标记可以解决此错误，当你声明一个变量时，它不会自动地包含`null`或`undefined`

```
let s = 'foo';
s = null; // 错误，`null`不能赋值给`string`

let sn: string | null = 'bar';
sn = null;

sn = undefined; // error, `undefined`不能赋值给`string | null`
```

注意，按照 JavaScript 的语意，TypeScript 会把`null`和`undefined`区别对待。
`string | null`，`string | undefined`和`string | undefined | null`是不同的类型

### 可选参数和可选属性

使用了`--strictNullChecks`，可选参数会被自动地加上`| undefined`

```
function f(x: number, y?: number) {
  return x + (y || 0)
}

f(1, 2);
f(1);
f(1, undefined);
f(1, null) // error，'null' is not assignable to `number | undefined`
```

可选属性也会同样的处理

```
class C {
  a: number;
  b?: number;
}

let c = new C();
c.a = 12;
c.a = undefined; // error, 'undefined' is not assignable to 'number'
c.b = 13;
c.b = undefined; // ok
c.b = null; // error, 'null' is not assignable to 'number  | undefined'
```

### 类型保护和类型断言

由于可以为`null`的类型是通过联合类型实现，那么你需要使用类型保护类去除`null`。幸运地是这与
在 JavaScript 里写的代码一致

```
function f(sn: string | null): string {
  if (sn === null) {
    return 'default'
  } else {
    return sn
  }
}
```

这里很明显地去除了`null`，也可以使用短路运算符

```
function f(sn: string | null): string {
  return sn || "default"
}
```

如果编译器不能去除`null`或`undefined`，你可以使用类型断言手动去除。语法是添加`!`后缀
`identifier!`从`identifier`的类型里去除了`null`和`undefined`

```
function fixed(name: string | null): string {
  function postfix(epithet: string) {
    return name!.charAt(0) + '. the' + epithet; // ok
  }
  name = name || 'Bob';
  return postfix('great')
}
```

本例使用了嵌套函数，因为无法跟踪所有对嵌套函数的调用，尤其是你将内层函数做为函数的返回值，
如果无法知道函数在哪里被调用，就无法知道调用时`name`的类型

### 类型别名

类型别名会给一个类型起个新名字。类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何
你需要手写的类名

```
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}
```

起别名不会新建一个类型，它创建了一个新名字来引用那个类型

同接口一样，类型别名也可以是泛型

```
type Container<T> = { value: T }
```

我们也可以使用类型别名来在属性引用自己

```
type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
}
```

与交叉类型一起使用，可以创建出一些十分稀奇古怪的类型

```
type LinkedList<T> = T & { next: LinkedList<T> }

interface Person {
  name: string
}
var people: LinkedList<Person>

var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
```

### 接口 vs 类型别名

**区别**

其一，接口创建一个新的名字，可以在其它任何地方使用。类型别名并不创建新名字。

```
type Alias = { num: number }
interface Interface {
  num: number
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;
```

在编辑器将鼠标悬停在`interfaced`上，显示它返回的是`Interface`，但悬停在`aliased`上时，
显示的却是对象字面量类型

另一个重要区别是类型别名不能被`extends`和`implements`

你应该尽量使用接口
