<template>
  <div class="container">
    <h3>Input Table</h3>
    <div>
      <Table border :columns="columns1" :data="data1"></Table>
    </div>
    <div>
      <i-switch v-model="switch1" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

const columns = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Address",
    key: "address",
    with: 150,
  },
];
const data = [
  {
    name: "John Brown",
    age: 18,
    address: "New York No. 1 Lake Park",
    date: "2016-10-03",
  },
  {
    name: "Jim Green",
    age: 24,
    address: "London No. 1 Lake Park",
    date: "2016-10-01",
  },
  {
    name: "Joe Black",
    age: 30,
    address: "Sydney No. 1 Lake Park",
    date: "2016-10-02",
  },
  {
    name: "Jon Snow",
    age: 26,
    address: "Ottawa No. 2 Lake Park",
    date: "2016-10-04",
  },
];

@Component
export default class InputTable extends Vue {
  columns1 = columns;
  data1 = data;
  switch1 = true;
}
</script>
<style lang="less" scoped>
.container {
  font-size: 16px;
  text-align: left;
  padding: 20px;
}
</style>
