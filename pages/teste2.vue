<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
<template>
  <div id="mama2">
    <h2>MAMA mina</h2>
    <h6>mama</h6>
    <div id="mama3">
      <h32>wewew</h32>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
