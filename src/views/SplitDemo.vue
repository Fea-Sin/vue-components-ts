<template>
  <div class="TBox">
    <div>Split Demo left-right</div>
    <div class="split-demo layout">
      <Split v-model="splitA" min="250px" max="500px">
        <div slot="left" class="split-layout-left">
          <div class="layout-lcon">4444</div>
        </div>
        <div slot="right" class="split-right-padding">456</div>
        <div slot="trigger" class="my-handle">
          <div class="my-handle-decoration"></div>
        </div>
      </Split>
    </div>
    <div>Split Demo top-bottom</div>
    <div class="split-vertical">
      <Split v-model="splitB" mode="vertical">
        <div slot="top">top part</div>
        <div slot="bottom">bottom part</div>
        <div slot="trigger" class="vertical-handle">
          <div class="vertical-handle-decoration"></div>
        </div>
      </Split>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SplitDemo extends Vue {
  splitA = 0.2;
  splitB = 0.7;
}
</script>
<style lang="less" scoped>
.split-demo {
  border: 1px solid #dcdee2;
  height: 300px;

  .split-right-padding {
    padding-left: 10px;
  }
  .split-layout-left {
    height: 100%;
  }
  .my-handle {
    width: 6px;
    height: 100%;
    cursor: col-resize;

    &-decoration {
      width: 50%;
      height: 100%;
      border-right: 1px solid #dcdee2;
      background: #289e94;
    }
  }
}
.layout {
  &-lcon {
    width: 100%;
    height: 100%;
    background-color: #289e94;
    color: #fff;
  }
}
.split-vertical {
  height: 600px;
  border: 1px solid #dcdee2;

  .vertical-handle {
    width: 100%;
    height: 6px;
    cursor: row-resize;
    &-decoration {
      height: 50%;
      width: 100%;
      border-bottom: 1px solid #dcdee2;
    }
  }
}
</style>
