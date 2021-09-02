<template>
  <div class="TBox">
    <div>Ace Alli</div>
    <my-ace
      name="my-ace"
      width="100%"
      height="700px"
      placeholder="myace"
      theme="monokai"
      mode="mysql"
      :fontSize="18"
      :enableLiveAutocompletion="true"
    />
  </div>
</template>
<script lang="ts">
import Vue from "vue";

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

export default Vue.extend({});
</script>
<style lang="less" scoped></style>
