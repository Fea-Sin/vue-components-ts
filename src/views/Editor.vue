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

import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

const Theme = ["monokai", "solarized_light", "solarized_dark"];
const Mode = ["javascript", "mysql", "java", "golang"];

Theme.forEach((theme) => {
  require(`ace-builds/src-noconflict/theme-${theme}`);
});
Mode.forEach((lang) => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});

@Component
export default class Editor extends Vue {}
</script>
<style lang="less" scoped></style>
