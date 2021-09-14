<template>
  <div class="TBox">
    <div>POPOVER TEST</div>
    <vf-popover v-model="mypop" width="350">
      <div>这里是一段内容</div>
      <div class="box">
        <vf-input v-model="myname" />
      </div>
      <div class="box">
        <vf-button size="mini" type="text" @click="mypop = !mypop">
          取消
        </vf-button>
        <vf-button size="mini" type="primary">确定</vf-button>
      </div>
      <vf-button slot="reference">HELLO</vf-button>
    </vf-popover>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PopTest extends Vue {
  mypop = false;
  myname = "";
}
</script>
<style lang="less" scoped>
.box {
  margin-top: 16px;
}
</style>
