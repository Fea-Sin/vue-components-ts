<template>
  <div class="TBox">
    <vf-split
      width="100%"
      height="700px"
      theme="solarized_light"
      mode="mysql"
      :fontSize="20"
      :enableLiveAutocompletion="true"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Editor extends Vue {}
</script>
<style lang="less" scoped></style>
