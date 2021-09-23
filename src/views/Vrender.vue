<script>
export default {
  data() {
    return {
      myName: "VFRender-HELLO",
    };
  },
  render() {
    const { myName } = this;
    return (
      <div class="TBox">
        <span>{myName}</span>
      </div>
    );
  },
};
</script>
