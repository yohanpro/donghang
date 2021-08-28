
export const mutations = {
  updateIsAuthenticated (state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  },
  updateActiveStatus (state, activeStatus) {
    state.activeStatus = activeStatus
  },
  updateToken (state, token) {
    state.token = token
  },
}

export const state = () => ({
  isAuthenticated: false,

})
