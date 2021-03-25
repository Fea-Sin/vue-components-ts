<!--
 * @Author: cqz 
 * @Date: 2021-03-24 16:06:47 
 * @Last Modified by:   cqz 
 * @Last Modified time: 2021-03-24 16:06:47 
 -->
<template>
  <li
    v-if="listData.type === 0"
    class="list"
    :style="{ paddingLeft: listData.layer * INTEND + 'px' }"
  >
    <input :id="listValie" type="checkbox" @change="checkChange" />
    <label :for="listValie">
      <span>"{{ listData.key }}"</span>
      <span class="interval">:</span>
      <span v-if="labelTag">
        {{ listData.value }}
      </span>
      <span v-else>"{{ listData.value }}"</span>
    </label>
  </li>
  <li
    v-else-if="listData.type === 1"
    :style="{ paddingLeft: listData.layer * INTEND + 'px' }"
  >
    <span class="decoration">
      <Icon size="20" type="md-arrow-dropdown" />
    </span>
    <span v-if="listData.key">
      <span>"{{ listData.key }}"</span>
      <span class="interval">:</span>
    </span>
    <span v-if="labelTag">
      {{ listData.value }}
    </span>
    <span v-else>"{{ listData.value }}"</span>
  </li>
  <li v-else :style="{ paddingLeft: listData.layer * INTEND + 'px' }">
    <span v-if="labelTag">
      {{ listData.value }}
    </span>
    <span v-else>"{{ listData.value }}"</span>
  </li>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class Item extends Vue {
  INTEND = 20;

  @Prop() private listData!: any;

  get listValie(): string {
    return `${this.listData.key}|${this.listData.value}`;
  }
  get labelTag(): boolean {
    if (
      this.listData.value === "[" ||
      this.listData.value === "]" ||
      this.listData.value === "{" ||
      this.listData.value === "}"
    ) {
      return true;
    }
    return false;
  }

  @Emit("onSelect")
  checkChange() {
    return this.listData;
  }
}
</script>
<style lang="less" scoped>
.list {
  .interval {
    margin-left: 5px;
    margin-right: 15px;
  }
  .decoration {
    margin-right: 8px;
  }
}
</style>
