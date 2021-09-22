<template>
  <div class="TBox">
    <div>TEST TOOLTIP</div>
    <vf-tooltip content="这里是提示内容">
      <vf-button>TIP</vf-button>
    </vf-tooltip>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TestTooltip extends Vue {}
</script>
<style lang="less" scoped></style>
