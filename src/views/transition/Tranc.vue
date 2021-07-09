<template>
  <div>
    <div class="handle"></div>
    <transition
      appear
      appear-class="slide-fade-enter"
      appear-active-class="slide-fade-enter-active"
      appear-to-class="slide-fade-enter-to"
    >
      <div v-if="show" class="name"></div>
    </transition>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TranB extends Vue {
  show = true;
}
</script>
<style lang="less" scoped>
.name {
  width: 200px;
  height: 50px;
  background-color: #ff6969;
}
.handle {
  margin-bottom: 16px;
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
slide-fade-enter-to {
  opacity: 1;
}
</style>
