<template>
  <div class="TBox">
    <div>VF-TABS</div>
    <vf-tabs v-model="activeName">
      <vf-tab-pane label="用户管理" name="first">
        用户管理
        <template slot="decor"><vf-icon name="loading" /></template>
      </vf-tab-pane>
      <vf-tab-pane label="权限管理" name="second">权限管理</vf-tab-pane>
      <vf-tab-pane label="任务" name="three">任务</vf-tab-pane>
    </vf-tabs>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TestTabs extends Vue {
  activeName = "first";
}
</script>
<style lang="less" scoped></style>
