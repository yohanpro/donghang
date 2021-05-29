
export const mutations = {
  updateIsAuthenticated (state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  },
  updateAccountStatus (state, accountStatus) {
    state.accountStatus = accountStatus
  },
  updateToken (state, token) {
    state.token = token
  },
}

export const state = () => ({
  isAuthenticated: false,

})
