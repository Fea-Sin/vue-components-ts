<template>
  <div>
    <div class="handle">
      <Button @click="show = !show">触发</Button>
    </div>
    <transition name="bounce">
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
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
</style>
