## vuex-class

使用方式

```
import Vue from 'vue'
import Component from 'vue-class-component'
import {
  State,
  Mutation,
  Action,
  Getter,
  namespace
} from 'vuex-class'

const SomeModule = namespace('path/to/module')

@Component
export default class MyComponent extends Vue {
  @State('foo') stateFoo
  @State(state => state.bar) stateBar
  @Mutation('foo') mutationFoo
  @Action('foo') actionFoo
  @Getter('foo') getterFoo
  @SomeModule.State('foo') someModuleStateFoo
  @SomeModule.Mutation('foo') someModuleMutationFoo

  // 也可以省略参数使用
  @State foo
  @Mutation bar
  @Action baz
  @getter qux

  created () {
    this.stateFoo // -> store.state.foo
    this.mutationFoo({ value: true }) // -> store.commit('foo', { value: true })
    this.actionFoo({ value: true }) // -> store.dispatch('foo', { value: true })
    this.getterFoo // -> store.getters.foo
    this.someModuleStateFoo // -> store.state.path.to.module.foo
    this.someModuleMutationFoo({ value: true }) // store.commit('path/to/module/foo', { value: true })
  }
}
```
