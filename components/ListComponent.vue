<template>
  <div id="ListMain">
    {{ getList }}
  </div>
</template>

<script>
import axios from 'axios'
import { getToken } from '~/plugins/apiServices.js'
export default {
  data() {
    return {}
  },

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
          return response
        })
        .catch((error) => {
          return error
        })
    },
  },
}
</script>
<style scoped>
#ListMain {
  grid-column: 3 / span 12;
  grid-row: 3 / span 9;
  background: rgb(42, 40, 40);
  color: white;
  justify-content: center;
  align-content: center;
}
</style>
