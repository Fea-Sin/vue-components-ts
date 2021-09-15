<template>
  <div class="TBox test-tree">
    <div class="box">TASK-TREE</div>
    <div class="box layout">
      <vf-task-tree :tasks="tasks" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      tasks: {
        title: "主目录",
        expanded: true,
        leaf: false,
        created: true,
        createFolder: true,
        children: [
          {
            title: "小明的文件夹",
            expanded: false,
            leaf: false,
            created: true,
            children: [
              {
                title: "M任务",
                expanded: false,
                leaf: true,
                status: "S",
              },
            ],
          },
          {
            title: "小红的文件夹",
            expanded: false,
            leaf: false,
            created: true,
            children: [
              {
                title: "H任务1",
                expanded: false,
                leaf: true,
              },
              {
                title: "H任务2",
                expanded: false,
                leaf: true,
              },
            ],
          },
        ],
      },
    };
  },
});
</script>
<style lang="less" scoped>
.box {
  padding: 16px;
}
.layout {
  width: 400px;
}
.test-tree {
  background-color: #f2f2f2;
}
</style>
