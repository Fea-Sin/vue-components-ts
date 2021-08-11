<template>
  <div class="TBox">
    <div>Ace</div>
    <!-- <MyAce width="100%" height="400px" /> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// import VFAce from "vf-vue-ace";
// eslint-disable-next-line
// const MyAce = require("vf-vue-ace");

@Component({
  components: {
    // MyAce,
  },
})
export default class AceDemo extends Vue {}
</script>
<style lang="less" scoped></style>
