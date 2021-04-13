## Variable

### sass 使用变量

```sass
$myFont: Helvetica, sans-serif;
$myColor: red;
$myFontSize: 18px;
$myWidth: 680px;

.container {
  width: $myWidth;
}
```

```sass
$prefix: css-tricks-;

.#{$prefix}button {
  padding: 10px;
}

// Compiles to
.css-tricks-button {
  padding: 10px;
}

// other
.#{$prefix} {
  &module {
    padding: 10px;
  }
  &header {
    font-size: 20px
  }
  &footer {
    font-size: 18px
  }
}

```

## less 使用变量

```less
// Variables
@link-color: #428bca;
@link-color-hover: darken(@link-color, 10%);

.link {
  color: @link-color;

  &:hover {
    color: @link-color-hover;
  }
}
```

### 选择器中使用变量

```less
@my-selector: banner;

.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}

// Compiles to
.banner {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```
