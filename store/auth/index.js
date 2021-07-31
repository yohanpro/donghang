
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

export const getters = {
  userObject: state => state.userObj,
}

const token = Cookies.get('donghang-token')

export const state = () => ({
  isAuthenticated: false,
  userId: null,
  token: token || null,
  userObj: {},
  accountStatus: -1,
  userAgreements: {},
  userImage: '',
})
