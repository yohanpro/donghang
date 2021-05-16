
import Cookies from 'js-cookie'

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

const token = Cookies.get('tf-topas-token')

export const state = () => ({
  isAuthenticated: false,
  accountStatus: -1,
  userId: 100,
  token: token || null,
})
