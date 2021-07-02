<template>
  <div class="TBox">
    <div>Debounce Ts</div>
    <div>
      <Input style="width: 300px" @on-change="debounceChange" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Debounce from "lodash/debounce";

interface IDebounceTs {
  debounceChange: () => void;
}

@Component
export default class DebounceTs extends Vue implements IDebounceTs {
  created() {
    this.debounceChange = Debounce(this.handleChange, 500);
  }

  handleChange(e: any) {
    console.log("输入内容--->", e.target.value);
  }
  // eslint-disable-next-line
  debounceChange() {}
}
</script>
