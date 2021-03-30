### interceptors

在 requests 和 responses 的处理函数`then`和`catch`之前添加拦截器

```
// 添加 request 拦截器
axios.interceptors.request.use(function(config) {
  // Do something before request is sent
  return config
}, function(error) {
  // Do something with request error
  return Promise.reject(error)
})

// 添加 response 拦截器
axios.interceptors.response.use(function(response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function(error) {
  // Any status code that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})
```

### 在自定义实例上添加拦截器

```
const instance = axios.create();

instance.interceptors.request.use(function() {/*...*/})
```
