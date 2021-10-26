<script>
import Vue from "vue";
import nvshared from "@nvapp/shared";

export default Vue.extend({
  data() {
    return {
      name: "NVShared",
    };
  },
  computed: {
    myobj() {
      const nv = { a: "hello" };
      return nvshared.isPlainObject(nv);
    },
  },
});
</script>
<template>
  <div class="TBox">
    <div>nv-shared</div>
    <div>{{ name }}</div>
    <div>hello: {{ myobj }}</div>
  </div>
</template>
