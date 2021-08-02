# 动态路由匹配

我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个`User`组件，对于所有
ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在`vue-router`的路由路径中使用`动态路径参数`
（dynamic segment）来达到这个效果。

```js
const User = {
  template: "<div>User</div>",
};

const router = new VueRouter({
  routes: [
    // 动态路径参数以冒号开头
    { path: "/user/:id", component: User },
  ],
});
```

现在，像`/user/foo`和`/user/bar`都将映射到相同的路由

一个路径参数使用`:`标记，当匹配到一个路由时，参数值会被设置到`this.$route.params`可以在组件内使用。
我们可以在组件中获取当前用户的 ID

```js
const User = {
  template: "<div>User: {{ $route.params.id }}</div>",
};
```

**可以在一个路由中设置多段`路径参数`**，对应的值都会被设置到`$route.params`中

| 模式                          | 匹配路径            | $route.params                          |
| ----------------------------- | ------------------- | -------------------------------------- |
| /user/:username               | /user/evan          | `{ username: 'evan' }`                 |
| /user/:username/post/:post_id | /user/evan/post/123 | `{ username: 'evan', post_id: '123' }` |

除了`$route.params`外，`$route`对象还提供了其它有用的信息，例如，`$route.query`（如果 url 中有查询参数）、
`$route.hash`等等。

## 响应路由参数的变化

当使用路由参数时，例如从`/user/foo`导航到`/user/bar`，原来的组件实例会被复用。因为两个路由都渲染同个组件，
比起销毁在创建，复用则显得更加高效。不过，这也意味着组件的声明周期钩子不会被调用。

复用组件时，想对路由参数的变化作出响应的话，你可以简单地`watch`检测`$route`对象：

```js
const User = {
  template: "...",
  watch: {
    $route(to, from) {
      // 对路由变化作出响应
    },
  },
};
```

或者使用`2.2`中引入的`beforeRouteUpdate`导航守卫：

```js
const User = {
  template: "...",
  beforeRouteUpdate(to, from, next) {
    // react to route changes
    // don't forget to call next()
  },
};
```
