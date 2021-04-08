## 重定向和别名

重定向也是通过`routes`配置来完成，下面例子从`/a`重定向到`/b`

```
const router = new VueRouter({
  routes: [
    {
      path: '/a',
      redirect: '/b'
    }
  ]
})
```

重定向的目标也可以是一个命名的路由

```
const router = new VueRouter({
  routes: [
    {
      path: '/a',
      redirect: { name: 'foo' }
    }
  ]
})
```

甚至是一个方法，动态返回重定向目标

```
const router = new VueRouter({
  routes: [
    {
      path: '/a',
      redirect: to => {
        // 方法接收 目标路由 作为参数
        // return 重定向的 字符串路径/路径对象
      }
    }
  ]
})
```

### 别名

重定向的意思是，当用户访问`/a`时，URL 将会被替换成`/b`，然后匹配路由为`/b`。

别名是什么

`/a`的别名是`/b`，意味着到用户访问`/b`时，URL 会保持为`/b`，但是路由匹配则为`/a`，
就像用户访问`/a`一样。

```
const router = new VueRouter({
  routes: [
    {
      path: '/a',
      component: A,
      alias: '/b'
    }
  ]
})
```
