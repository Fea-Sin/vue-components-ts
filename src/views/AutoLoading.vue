<template>
  <div class="auto-loading">
    <div class="box">
      <Card :bordered="false">
        <p slot="title">测试AutoLoading</p>
        <p>凤凰台上凤凰游，凤去台空江自流。</p>
        <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
        <p>三山半落青天外，二水中分白鹭洲。</p>
        <p>总为浮云能蔽日，长安不见使人愁。</p>
      </Card>
      <Spin size="large" fix v-if="myB || myC || myD || myE"></Spin>
    </div>
    <div class="handle">
      <Button type="primary" class="btn" @click="handleClick">
        test promise
      </Button>
      <Button type="primary" class="btn" @click="handleAsync">
        test async
      </Button>
      <Button type="primary" class="btn" @click="hello">
        test function promise
      </Button>
      <Button type="primary" class="btn" @click="handleWrapAsync">
        test function async
      </Button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { addLoading, loadingWrap } from "@/decorators/loading";
import { namespace } from "vuex-class";

const AccountModule = namespace("account");

@Component
export default class AutoLoading extends Vue {
  myB = false;
  myC = false;
  myD = false;
  myE = false;

  @AccountModule.Action incrementBy: any;

  @addLoading("myC")
  handleClick() {
    const { dispatch } = this.$store;
    return dispatch("account/incrementBy", {
      amount: 67,
    });
  }

  @addLoading("myD")
  handleAsync() {
    const { dispatch } = this.$store;
    return dispatch("account/autoLoadingTestAsync");
  }
  handleAsyncT() {
    const { dispatch } = this.$store;
    return dispatch("account/autoLoadingTestAsync");
  }

  hello() {
    loadingWrap(this.incrementBy, this, "myB")({ amount: 67 });
  }
  handleWrapAsync() {
    loadingWrap(this.handleAsyncT, this, "myE")();
  }
}
</script>
<style lang="less" scoped>
.auto-loading {
  font-size: 14px;
  text-align: left;
  padding: 16px;
  .box {
    text-align: center;
    background-color: #eee;
    padding: 20px;
    width: 500px;
    position: relative;
  }
  .handle {
    margin-top: 16px;
  }
  .btn {
    margin-left: 16px;
  }
}
</style>
