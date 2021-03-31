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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BlogPosts from "@/components/BlogPosts.vue";

@Component({
  components: {
    BlogPosts,
  },
})
export default class About extends Vue {
  font = 1;

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
