<template>
  <div class="TBox">
    <div class="box">ALERT</div>
    <div class="box">
      <vf-alert title="提示文案55" type="success" />
    </div>
    <div class="box">
      <vf-alert title="重要提示" type="error" effect="dark" />
    </div>
    <div class="box">
      <vf-alert
        title="警告文本"
        type="warning"
        description="这里会有一些文本提示"
      />
    </div>
    <div class="box">
      <MyAlert title="8778787878" />
    </div>
    <div class="box">
      <local-alert
        title="本地引用"
        type="warning"
        effect="dark"
        description="这里是一些文本等等"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Alert } from "vf-vue-ui";

export default Vue.extend({
  components: {
    LocalAlert: Alert,
  },
});
</script>
<style lang="less" scoped>
.box {
  padding: 16px;
  width: 500px;
}
</style>
