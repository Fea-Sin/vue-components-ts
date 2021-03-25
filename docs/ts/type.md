## 类型基础

### The Primitives

- string

- number

- boolean

#### Arrays

arry like `[1, 2, 3]`，we can use the syntax `number[]`
you may also written as `Array<number>`

#### any

TypeScript has a special type `any`

when a value is of type `any`,
you can access any properties of it, which will in turn be of type `any`
call it like a function
assign it to a value of any type

以下代码都是合法的

```
let obj: any = {x: 0}
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```

> **noImplicitAny**
>
> 如果避免使用`any`类型，
>
> 使用编辑器标记`noImplicitAny`来将任何隐式的`any`标记为错误

### 联合类型（Union Types）

### 类型别名（Type Aliases）

using object types and union types by writing them directly in type annotations

it's common to want to use the same type more than once and
refer to it by a single name

语法如下

```
type Point {
  x: number;
  y: number;
}
function printCoord(pt: Point) {
  console.log("The coordinate's x value is" + pt.x)
  console.log("The coordinate's y value is" + pt.y)
}

printCoord({x: 100, y: 500})
```

#### type alias can name a union type

```
type ID = number | string;
```

### 接口（Interfaces）

An interfaces declaration is another way to name an object type

```
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  // ....
}
printCoord({x: 100, y: 500})
```

### type 与 interface 的区别

推荐使用 interface

### 类型断言（Type Assertions）
