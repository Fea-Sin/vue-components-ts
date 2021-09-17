# Vue.set

向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。
它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property
如： `this.myObject.newProperty = 'HI'`

> 注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象

**Vue.set(target, propertyName/index, value)**

- target: Object | Array
- propertyName/index: string | number
- value: any

**实例方法**

`vm.$set()`
