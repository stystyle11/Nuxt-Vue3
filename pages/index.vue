<template>
  <div id="main">
    <div v-if="getLoggedIn" id="userBoard">
      <p>If you can read this, you are Logged-in at Search and Stay!</p>
      <p>You may proceed to the Authenticated route.</p>
      <nuxt-link to="/HomePage">
        <button class="ssbutton">Go to Home Page</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { getToken, getUser } from '~/plugins/apiServices.js'
export default {
  name: 'Index',

  computed: {
    getLoggedIn() {
      return this.$store.state.loggedIn
    },
  },
  mounted() {
    this.getList()
  },

  methods: {
    async getList() {
      const bearerToken = await getToken()
      this.$store.commit('updateToken', bearerToken)

      const userLoggedIn = await getUser()

      this.$store.commit('updateLoggedIn', userLoggedIn)
    },
  },
}
</script>
<style scoped>
#main {
  display: grid;
  grid-column: 1 / span 16;
  grid-row: 3 / span 13;

  justify-content: center;
  align-content: center;
}
#userBoard {
  display: grid;
  grid-column: 4 / 14;
  grid-row: 4 / 14;
  background: rgb(243, 155, 114);
  height: 100%;
  width: 100%;
  outline: 5px solid white;
  text-align: center;
  font-size: 1rem;
  padding: 1.5em;
  color: #fff;
  text-shadow: 1px 1px 1px #000000;
}
p {
  padding: 1em;
}
.ssbutton {
  box-shadow: inset 0px 1px 0px 0px #f7c5c0;
  background: linear-gradient(to bottom, #fc8d83 5%, #e4685d 100%);
  background-color: #fc8d83;
  border-radius: 6px;
  border: 1px solid #d83526;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  text-shadow: 1px 1px 1px #222;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.3em 2em;
  text-decoration: none;
  text-shadow: 0px 1px 0px #b23e35;
}
.ssbutton:hover {
  background: linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);
  background-color: #e4685d;
}
.ssbutton:active {
  position: relative;
  top: 1px;
}
</style>
