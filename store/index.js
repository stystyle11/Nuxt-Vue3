export const state = () => ({
  bearerToken: '',
  listRealState: [],
  loggedIn: false,
})

export const mutations = {
  updateToken: (state, data) => {
    state.bearerToken = data
  },
  updateLoggedIn: (state, data) => {
    state.loggedIn = data
  },
  getListItems: (state, data) => {
    state.listRealState = data
  },
}
export const getters = {
  validatedUser: (state) => {
    return state.validated
  },
}
