
import Cookies from 'js-cookie'

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
  updateUserId (state, userId) {
    state.userId = userId
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
  activeStatus: -1,
  userAgreements: {},
  userImage: '',
})
