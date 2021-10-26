<script>
import Vue from "vue";
import { isPlainObject, isMap } from "@nvapp/shared";

export default Vue.extend({
  computed: {
    mynv() {
      const nv = { a: 23 };
      return isPlainObject(nv);
    },
    mynvmap() {
      const nva = {};
      return isMap(nva);
    },
  },
});
</script>
<template>
  <div class="TBox">
    <div>nv-shared</div>
    <div>Hello: {{ mynv }}</div>
    <div>Map: {{ mynvmap }}</div>
  </div>
</template>
