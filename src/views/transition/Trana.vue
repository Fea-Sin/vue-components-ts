<template>
  <div class="box">
    <h2>过渡</h2>
    <div class="demo" style="height: 500px">
      <h3>列表初始渲染</h3>
      <TranE />
    </div>
    <div class="demo">
      <h3>CSS 过渡</h3>
      <div class="handle">
        <Button @click="show = !show">触发</Button>
      </div>
      <transition name="slide-fade">
        <div v-if="show" class="name"></div>
      </transition>
    </div>
    <div class="demo">
      <h3>CSS 动画</h3>
      <TranB />
    </div>
    <div class="demo">
      <h3>初始渲染过渡</h3>
      <TranC />
    </div>
    <div class="demo">
      <h3>列表过渡</h3>
      <TranD />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TranB from "./Tranb.vue";
import TranC from "./Tranc.vue";
import TranD from "./Trand.vue";
import TranE from "./Trane.vue";

@Component({
  components: {
    TranB,
    TranC,
    TranD,
    TranE,
  },
})
export default class Tran extends Vue {
  show = true;
}
</script>
<style lang="less" scoped>
.box {
  font-size: 16px;
  text-align: left;
  padding: 16px;
}
.name {
  width: 200px;
  height: 50px;
  background-color: #ff6969;
}
.demo {
  padding: 16px;
  border: 1px solid #873bf4;
  border-radius: 3px;
  width: 350px;
  min-height: 180px;
  margin-bottom: 16px;
  .handle {
    margin-bottom: 16px;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
