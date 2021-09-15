<template>
  <div class="TBox">
    <div>TEST SELECT</div>
    <vf-select v-model="mya">
      <vf-option label="文件夹" value="1"></vf-option>
      <vf-option label="任务" value="2"></vf-option>
    </vf-select>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TestSelect extends Vue {
  mya = "2";
}
</script>
<style lang="less" scoped></style>
