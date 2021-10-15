<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      myObj: {
        a: 1,
      },
      myArr: [1, 2, 3],
    };
  },
  methods: {
    updateObj() {
      (this.myObj as any).b = "更新对象";
      console.log("update obj");
    },
    updateArr() {
      this.myArr[1] = 42;
      // this.myArr.splice(1, 1, 42);
      console.log("update arr");
    },
  },
});
</script>
<template>
  <div class="TBox">
    <div>Hello Vue</div>
    <div>{{ myObj }}</div>
    <div>
      <button @click="updateObj">更新对象</button>
    </div>
    <div>{{ myArr }}</div>
    <div>
      <button @click="updateArr">更新数组</button>
    </div>
  </div>
</template>
