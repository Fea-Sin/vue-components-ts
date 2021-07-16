## 路由权限

如何在路由实例上动态添加一条路由，这是实现路由权限的关键所在

- router.addRoute

在路由实例上添加一条新路由规则。如果该路由规则有`name`，并且已经存在一个与之相同的名字，则会
覆盖它

```ts
addRoute(route: RoutConfig): () => void
```

在现有路由下动态添加一条子路由。如果该路由规则有`name`，并且已经存在一个与之相同的名字，则会覆盖它

```ts
addRoute(parentName: string, route: RouteConfig): () => voide
```
