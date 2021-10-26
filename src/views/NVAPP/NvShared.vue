<script>
import Vue from "vue";
import nvs from "@nvapp/shared";

export default Vue.extend({
  data() {
    return {
      name: "NVShared",
    };
  },
  computed: {
    mynv() {
      const nv = { a: 12 };
      return nvs.isPlainObject(nv);
    },
  },
});
</script>
<template>
  <div class="TBox">
    <div>nv-shared</div>
    <div>{{ name }}</div>
    <div>hello: {{ mynv }}</div>
  </div>
</template>
