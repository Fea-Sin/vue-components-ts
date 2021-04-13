## Sass Mixins

`@mixin`指令，可以指定 CSS code 来重复使用

`@include`指令，引入 mixin 所定义的 CSS code

### 定义 Mixin

```css
@mixin important-text {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
}
```

> 提示：连字符`-`和下划线`_`在 Sass 中是相同的
> 因此，@mixin important-text {} 与 @mixin important_text {}是相同的 mixin

### 使用 Mixin

```css
.danger {
  @include important-text;
  background-color: green;
}
```

Sass 编译生成的 css

```css
.danger {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
  background-color: green;
}
```

### mixin 也可以引入其他 mixins

```css
@mixin special-text {
  @include important-text;
  @include link;
  @include special-border;
}
```

### 给 Mixin 传参

```css
@mixin bordered($color, $width) {
  border: $width solid $color;
}

.myNotes {
  @include bordered(red, 2px);
}
```

### Mixin 的默认参数

```css
@mixin bordered($color: blue, $width: 1px) {
  border: $width solid $color;
}

.myTips {
  @include bordered($color: orange);
}
```

## 在 Less 中如何使用

less 文件使用 Mixins

### 定义 Mixin

```less
.important-text() {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
}
```

### 使用 Mixin

```less
.danger {
  .important-text();
  background-color: green;
}
```

### 给 Mixin 传参

```less
.bordered(@color, @width) {
  border: @width solid @color;
}

.myNotes {
  .bordered(red, 2px);
}
```

### 命名参数

```less
.my-style(@color: black; @margin: 10px; @padding: 20px) {
  color: @color;
  margin: @margin;
  padding: @padding;
}

.class1 {
  .my-style(@margin: 20px; @color: red);
}
```

[less](https://less.bootcss.com/features/#mixins)

[sass](https://www.w3schools.com/sass/sass_mixin_include.php)
