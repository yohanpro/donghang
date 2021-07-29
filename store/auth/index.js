
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

const token = Cookies.get('donghang-token')

export const state = () => ({
  isAuthenticated: false,
  userId: 100,
  token: token || null,
  userObj: {},
  accountStatus: -1,
  userAgreements: {},
  userImage: '',
})
