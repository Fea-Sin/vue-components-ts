### 请求与错误处理

#### GET 请求

```
const axios = require('axios')

axios.get('/user?ID=12345')
  .then((response) => {
    // success handle
    console.log(response)
  })
  .catch((error) => {
    // error handle
    console.log(error)
  })
```

#### POST 请求

```
axios.post('user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.log(error)
})
```

config 方式

```
axios({
  method: 'post',
  url: '/user/12345'
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
})
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.log(error)
})
```

### 多个请求

```
function getUserAccount() {
  return axios.get('/user/12345')
}

function getUserPermissions() {
  return axios.get(/user/permissions)
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then((results) => {
    const acct = results[0]
    const perm = results[1]
  })
  .catch((error) => {
    console.log(error)
  })
```
