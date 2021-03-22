<template>
  <div class="blogs">
    <div :style="{ fontSize: postFontSize + 'em' }">
      <h3>blog post title</h3>
      <div class="text">this is post text</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BlogPosts extends Vue {
  @Prop() private postFontSize!: number;
}
</script>

<style lang="less" scoped>
.blogs {
  font-size: 18px;
}
</style>
