<!--
 * @Author: cqz 
 * @Date: 2021-03-31 11:34:44 
 * @Last Modified by: cqz 
 * @Last Modified time: 2021-03-31 11:34:44 
 * @Description: 
 -->
<template>
  <div class="account">
    <h3>账户模块</h3>
    <div class="vuBox">
      <div class="box">
        <span class="marR15">项目名称</span>
        <span>{{ appName }}</span>
      </div>
      <div>
        <div class="box">
          <span class="marR15">账户</span>
          <span class="num">{{ viewCount }}</span>
        </div>
        <div>
          <span class="marR15">
            <Button type="primary" @click="handleAdd">增加</Button>
          </span>
          <span>
            <Button type="info" @click="handleAsyncIncrement">异步</Button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, namespace } from "vuex-class";

const AccountModule = namespace("account");

@Component
export default class Account extends Vue {
  // *--- props ---*
  // *--- state ---*
  // *---  store state ---*

  @State appName!: string;
  @AccountModule.State viewCount!: number;

  // *--- store mutations ---*

  @AccountModule.Mutation add!: (payload: any) => void;

  // *--- store actions ---*
  @AccountModule.Action incrementBy: any;

  // *--- methods ---*
  handleAdd(): void {
    this.add({
      amount: 99,
    });
  }
  handleAsyncIncrement(): void {
    this.incrementBy({ amount: 67 }).then((res: any) => {
      console.log("异步 action", res);
      this.$Message.success("异步 ACTION 执行成功！");
    });
  }
}
</script>
<style lang="less" scoped>
.account {
  text-align: left;
  padding: 20px;

  .box {
    font-size: 20px;
    margin-bottom: 15px;
  }
  .num {
    color: blueviolet;
  }
}
</style>
