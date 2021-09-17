# Vue.delete

删除对象的 property，如果对象是响应式的，确保删除能出发更新视图。这个方法主要
用于避开 Vue 不能检测到 property 被删除的限制，但是你应该很少使用它

> 目标对象不能是一个 Vue 实例或 Vue 实例的根数据对象

**Vue.delete(target, propertyName/index)**

- target: Object | Array
- propertyName/index: string | number

**实例方法**

`vm.$delete`
