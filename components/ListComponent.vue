<template>
  <div id="ListMain">
    {{ getValidation }}
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    getValidation() {
      return this.$store.state.bearerToken
    },
  },
}
</script>
<style scoped>
#ListMain {
  grid-column: 3 / span 12;
  grid-row: 3 / span 9;
  background: rgb(42, 40, 40);

  justify-content: center;
  align-content: center;
}
</style>
