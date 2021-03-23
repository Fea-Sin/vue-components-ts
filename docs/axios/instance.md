### Creating an instance

You can create a new instance of axios with a custom config

```
import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})
```
