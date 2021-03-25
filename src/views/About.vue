<template>
  <div class="about">
    <div class="box">
      <h3>DOM事件</h3>
      <Button @click="greet">按钮点击</Button>
    </div>
    <div class="box">
      <h3>自定义组件的基本写法</h3>
      <BlogPosts :postFontSize="font"></BlogPosts>
      <div class="handle">
        <Button class="marR15" @click="big">放大</Button>
        <Button @click="small">缩小</Button>
      </div>
    </div>
    <div class="box">
      <h3>JsonParse解析组件</h3>
      <JsonParse :jsonData="testData" @onSelect="handleSelect"></JsonParse>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BlogPosts from "@/components/BlogPosts.vue";
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
    BlogPosts,
    JsonParse,
  },
})
export default class About extends Vue {
  font = 1;
  testData = testData;

  greet(): void {
    console.log("hello world");
  }
  big(): void {
    if (this.font < 6) {
      this.font = this.font + 1;
    }
    console.log("变大", this.font);
  }
  small(): void {
    if (this.font > 1) {
      this.font = this.font - 1;
    }
    console.log("变小", this.font);
  }
  handleSelect(value: any) {
    console.log("父组件回调", value);
  }
}
</script>

<style scoped lang="less">
.box {
  margin: 10px;
  padding: 20px;
  border: 1px solid #42b983;
  margin-bottom: 10px;
  text-align: left;

  h3 {
    text-align: left;
  }
  .handle {
    text-align: left;
  }
}
</style>
