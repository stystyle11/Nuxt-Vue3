<template>
  <div id="defaultMainGrid">
    <HeaderComponent />
    <nuxt />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  components: {
    HeaderComponent,
  },
}
</script>
<style>
#defaultMainGrid {
  display: grid;
}
</style>
