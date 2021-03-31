<!--
 * @Author: cqz 
 * @Date: 2021-03-24 14:54:24 
 * @Last Modified by:   cqz 
 * @Last Modified time: 2021-03-24 14:54:24 
 -->
<template>
  <div class="parse">
    <div>
      <span class="decoration">
        <Icon size="20" type="md-arrow-dropdown" />
      </span>
      <span>{</span>
    </div>
    <ul class="indent" v-if="jsonData.length > 0">
      <Item
        v-for="item in jsonData"
        :listData="item"
        :key="item.id"
        @onSelect="handleSelect"
      ></Item>
    </ul>
    <div>
      <span>}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import Item from "./Item.vue";

interface ListItem {
  id: number;
  tableType: number;
  originKey: string;
  originValue: string;
  layer: number;
}

@Component({
  components: {
    Item,
  },
})
export default class JsonParse extends Vue {
  selectData: ListItem[] = [];

  @Prop({
    default: () => [],
  })
  jsonData!: ListItem[];

  @Emit("onSelect")
  handleSelect(value: ListItem): ListItem[] {
    let idArr = this.selectData.map((item) => item.id);
    if (idArr.includes(value.id)) {
      this.selectData = this.selectData.filter((item) => item.id !== value.id);
    } else {
      this.selectData.push(value);
    }
    return this.selectData;
  }
}
</script>

<style scoped lang="less">
.parse {
  font-size: 16px;
  color: #545454;

  ul,
  li {
    text-decoration: none;
    list-style: none;
  }
  .decoration {
    margin-right: 8px;
  }
  .indent {
    padding-left: 30px;
  }
}
.item {
  .decoration {
    vertical-align: 2px;
  }
}
</style>
