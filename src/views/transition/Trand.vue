<template>
  <div>
    <div class="handle">
      <Button class="add" @click="add">增加</Button>
      <Button class="add" @click="remove">减少</Button>
      <Button @click="shuffle">随机</Button>
    </div>
    <transition-group name="list-complete" tag="div">
      <div class="box" v-for="item in items" :key="item">
        {{ item }}
      </div>
    </transition-group>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Shuffle from "lodash/shuffle";

@Component
export default class TranB extends Vue {
  items: number[] = [1, 2, 3, 4, 5];
  nextNum = 6;

  randomIndex() {
    return Math.floor(Math.random() * this.items.length);
  }

  add() {
    this.items.splice(this.randomIndex(), 0, this.nextNum++);
  }
  remove() {
    this.items.splice(this.randomIndex(), 1);
  }
  shuffle() {
    this.items = Shuffle(this.items);
  }
}
</script>
<style lang="less" scoped>
.name {
  width: 200px;
  height: 50px;
  background-color: #ff6969;
}
.box {
  width: 50px;
  height: 50px;
  background-color: #ff6969;
  text-align: center;
  line-height: 50px;
  color: #fff;
  margin-bottom: 16px;
  transition: all 1s;
}
.handle {
  margin-bottom: 16px;
  .add {
    margin-right: 16px;
  }
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
