<script>
import ListComponent from '@/components/ListComponent.vue'
export default {
  name: 'HomePage',
  components: {
    ListComponent,
  },
  middleware: 'auth',
}
</script>
<template>
  <div id="main">
    <h2 class="title">This is the Home Page</h2>
    <ListComponent> </ListComponent>
  </div>
</template>
<style scoped>
#main {
  display: grid;
  grid-column: 1 / span 16;
  grid-row: 3 / span 13;

  justify-content: center;
  align-content: center;
  text-align: center;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(16, 1fr);
}
.title {
  grid-column: 3 / span 12;
  grid-row: 2 / span 1;
  background: white;
  text-align: center;
  display: grid;
  align-items: center;
  color: #ff4d00;
  font-weight: 900;
  text-shadow: 1px 1px 1px #222;
}
</style>
