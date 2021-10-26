<script>
import Vue from "vue";
import { remove, isSet } from "@nvapp/shared";

export default Vue.extend({
  computed: {
    mynva() {
      const arr = ["one", "two", "three"];
      remove(arr, "two");
      return arr;
    },
    mynvb() {
      const a = new Set([1, 2]);
      return isSet(a);
    },
  },
});
</script>
<template>
  <div class="TBox">
    <div>nv-shared</div>
    <div>my arr: {{ mynva }}</div>
    <div>my set: {{ mynvb }}</div>
  </div>
</template>
