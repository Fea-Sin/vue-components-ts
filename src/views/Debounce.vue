<template>
  <div class="TBox">
    <div>Debounce</div>
    <div>
      <Input style="width: 300px" @on-change="handleDebounce" />
    </div>
  </div>
</template>
<script>
import Debounce from "lodash/debounce";
export default {
  data() {
    return {};
  },
  methods: {
    handleChange(e) {
      console.log(e.target.value);
    },
    handleDebounce: Debounce(function (e) {
      this.handleChange(e);
    }, 500),
  },
};
</script>
