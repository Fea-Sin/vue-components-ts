<!--
 * @Author: cqz 
 * @Date: 2021-03-25 14:20:41 
 * @Last Modified by:   cqz 
 * @Last Modified time: 2021-03-25 14:20:41 
 -->
<template>
  <div class="jparse">
    <h3>json parse009</h3>

    <JsonParse :jsonData="testData" @onSelect="handleSelect"></JsonParse>
    <h3>json parse data</h3>
    <JsonParse :jsonData="jsonData" @onSelect="handleSelectData"></JsonParse>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import JsonParse from "@/components/JsonParse/index.vue";
import DATA from "@/components/JsonParse/data";

const testData: any = [
  { id: 1, tableType: 0, originKey: "userName", originValue: "张三", layer: 1 },
  { id: 2, tableType: 0, originKey: "sex", originValue: "男", layer: 1 },
  { id: 3, tableType: 1, originKey: "orders", originValue: "[", layer: 1 },
  { id: 4, tableType: 1, originKey: "", originValue: "[", layer: 2 },
  { id: 5, tableType: 1, originKey: "", originValue: "{", layer: 3 },
  { id: 6, tableType: 0, originKey: "id", originValue: "3", layer: 4 },
  { id: 7, tableType: 0, originKey: "money", originValue: "300", layer: 4 },
  { id: 8, tableType: 0, originKey: "abc", originValue: "fffeefe", layer: 4 },
  { id: 9, tableType: 2, originKey: "", originValue: "}", layer: 3 },
  { id: 10, tableType: 2, originKey: "", originValue: "]", layer: 2 },
  { id: 11, tableType: 2, originKey: "", originValue: "]", layer: 1 },
];

@Component({
  components: {
    JsonParse,
  },
})
export default class JParse extends Vue {
  testData = testData;
  jsonData: any = DATA;

  handleSelect(value: any): void {
    console.log("选中项目----", value);
  }
  handleSelectData(value: any): void {
    console.log("select data--->", value);
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
