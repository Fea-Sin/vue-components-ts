# HTML5 History 模式

`vue-router`默认 hash 模式，使用 URL 的 hash 来模拟一个完整的 URL，于是当
URL 改变时，页面不会重新加载

如果不想要很丑的 hash，我们可以用 history 模式，这种模式充分利用`history.pushState`
API 来完成 URL 跳转而无需重新加载页面

history 需要后台配置支持，因为我们是单页客户端应用，如果后台没有正确的配置，当用户在浏览器
直接访问`http://oursite.com/user/id`就会返回 404

服务端需要增加一个覆盖所有情况的候选资源，如果 URL 匹配不到任何静态资源，则应该返回同一个`index.html`
页面

## 警告

上述服务端配置后，服务器就不会返回 404 错误页面，因为对于所有路径都会返回`index.html`文件，
为了避免这种情况，你应该在 Vue 应用里面覆盖所有的路由情况，然后再给出一个 404 页面

## v4.x

### hash 模式

```js
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
});
```

它在内部传递的实际 URL 之前使用了一个哈希字符（#）。由于这部分 URL 从未被发送到服务器，
所以它不需要在服务器层面上进行任何特殊处理。不过，它在 SEO 中确实有不好的影响，如果你担心这个问题，
可以使用 HTML5 模式

### HTML5 模式

```js
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});
```

此时，URL `http://oursite.com/user/id`就会变得正常。不过，问题来了，由于我们是一个单页的客户端应用，如果没有适当的服务器，
用户在浏览器中直接访问`http://oursite/user/id`，就会得到一个 404 错误
