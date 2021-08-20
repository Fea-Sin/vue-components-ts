<template>
  <div class="TBox">
    <vf-diff
      width="100%"
      height="700px"
      theme="github"
      :fontSize="20"
      :value="myValue"
      :onChange="handleChange"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

const themes = ["monokai", "solarized_light", "github"];
themes.forEach((theme) => {
  require(`ace-builds/src-noconflict/theme-${theme}`);
});

@Component
export default class MyDiff extends Vue {
  myValue = [`123`, `456`];

  handleChange(val: string[]) {
    this.myValue = val;
  }
}
</script>
<style>
.codeMarker {
  background: #fff677;
  position: absolute;
  z-index: 20;
}
</style>
<style lang="less" scoped></style>
