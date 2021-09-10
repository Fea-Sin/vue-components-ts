<template>
  <div class="TBox">
    <div>TAG TEST</div>
    <div class="box">
      <h3>基本用法</h3>
      <vf-tag>HELLO</vf-tag>
      <vf-tag type="success">标签</vf-tag>
      <vf-tag type="danger" closable>文本内容</vf-tag>
    </div>
    <div class="box">
      <h3>其它用法</h3>
      <vf-tag
        type="warning"
        closable
        effect="dark"
        @click="handleClick"
        class="my-tag"
      >
        其它测试
      </vf-tag>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TagDemo extends Vue {
  handleClick() {
    console.log("amazing component");
  }
}
</script>
<style lang="less" scoped>
.box {
  padding-top: 16px;
  h3 {
    padding-bottom: 8px;
  }
}
.my-tag {
  cursor: pointer;
}
</style>
