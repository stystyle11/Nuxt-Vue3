<script>
import axios from 'axios'
import ListComponent from '@/components/ListComponent.vue'
import { getToken } from '~/plugins/apiServices.js'
export default {
  name: 'HomePage',
  components: {
    ListComponent,
  },
  middleware: 'auth',
  computed: {
    getList() {
      return this.$store.state.listRealState
    },
  },
  mounted() {
    this.getListItems()
  },
  methods: {
    async getListItems() {
      const token = await getToken()
      axios
        .get('https://sys-dev.searchandstay.com/api/admin/house_rules', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const data = response.data.data.entities
          this.$store.commit('updateListItems', data)
        })
        .catch((error) => {
          return error
        })
    },
  },
}
</script>
<template>
  <div id="main">
    <h2 class="title">This is the Home Page</h2>
    <ListComponent :list="getList"> </ListComponent>
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
