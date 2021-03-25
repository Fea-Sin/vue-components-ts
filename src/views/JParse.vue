<!--
 * @Author: cqz 
 * @Date: 2021-03-25 14:20:41 
 * @Last Modified by:   cqz 
 * @Last Modified time: 2021-03-25 14:20:41 
 -->
<template>
  <div class="jparse">
    <h3>json parse</h3>

    <JsonParse :jsonData="testData" @onSelect="handleSelect"></JsonParse>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import JsonParse from "@/components/JsonParse/index.vue";

const testData: any = [
  { id: 1, type: 0, key: "userName", value: "张三", layer: 1 },
  { id: 2, type: 0, key: "sex", value: "男", layer: 1 },
  { id: 3, type: 1, key: "orders", value: "[", layer: 2 },
  { id: 4, type: 1, key: "", value: "[", layer: 3 },
  { id: 5, type: 1, key: "", value: "{", layer: 4 },
  { id: 6, type: 0, key: "id", value: "3", layer: 5 },
  { id: 7, type: 0, key: "money", value: "300", layer: 5 },
  { id: 8, type: 0, key: "abc", value: "fffeefe", layer: 5 },
  { id: 9, type: 2, key: "", value: "}", layer: 4 },
  { id: 10, type: 2, key: "", value: "]", layer: 3 },
  { id: 11, type: 2, key: "", value: "]", layer: 2 },
];

@Component({
  components: {
    JsonParse,
  },
})
export default class JParse extends Vue {
  testData = testData;

  handleSelect(value: any): void {
    console.log("选中项目----", value);
  }
}
</script>
<style lang="less" scoped>
.jparse {
  padding: 20px;
  text-align: left;
  font-size: 18px;
}
</style>
