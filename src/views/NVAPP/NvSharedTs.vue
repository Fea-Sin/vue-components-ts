<script lang="ts">
import Vue from "vue";
import { isObject } from "@nvapp/shared";

export default Vue.extend({
  computed: {
    mya() {
      const nva = { a: 42 };
      return isObject(nva);
    },
  },
});
</script>

<template>
  <div class="TBox">
    <div>NVAPP-SHARED-TS</div>
    <div>NVS: {{ mya }}</div>
  </div>
</template>
