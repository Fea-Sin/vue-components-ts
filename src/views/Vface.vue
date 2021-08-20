<template>
  <div class="TBox">
    <vf-ace
      name="my-ace"
      width="100%"
      height="700px"
      placeholder="VF-ACE 编辑器"
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

const languages = ["javascript", "mysql", "golang", "java"];
const themes = ["monokai", "solarized_light"];
languages.forEach((lang) => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
});
themes.forEach((theme) => {
  require(`ace-builds/src-noconflict/theme-${theme}`);
});

@Component
export default class AceDemo extends Vue {}
</script>
<style lang="less" scoped></style>
