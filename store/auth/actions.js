import Cookies from 'js-cookie'
import { ACCOUNT_STATUS } from '~/config/constants'
// import { parseToken } from '~/utils/tokenParser'
export const endpoints = {
  token: vendor => `/auth/${vendor}`,
  refreshToken: '/auth/refresh_token',
}

export default {
  async signIn (_, { vendor, payload }) {
    try {
      const result = await this.$axios.post(endpoints.token(vendor), payload)

      return result.data
    } catch (error) {
      const { data } = error.response
      console.log('sign in 에러났음', data)
    }
  },

  async refreshToken ({ dispatch }) {
    const currentToken = Cookies.get('donghang-token')
    if (!currentToken) {
      return false
    }

    const refreshTokenPayload = {
      token: currentToken,
    }
    try {
      const result = await this.$axios.$post(
        endpoints.refreshToken,
        refreshTokenPayload,
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true },
      )
      const { token, activeStatus, id: userId } = result

      dispatch('handleTokenRetrieve', {
        accessToken: token,
        activeStatus,
        userId,
      })
      return activeStatus
    } catch (error) {
      return false
    }
  },
  async postToken ({ dispatch, _ }, { payload, vendor }) {
    const result = await this.$axios.post(endpoints.token(vendor), payload)
    const { token, activeStatus, id: userId } = result.data
    /**
     * 백엔드에서 토큰을 받았을 경우
     * 받아온 토큰을 다시 retrive 해주어야 한다.
     * 이제 이 토큰으로 계속 주고 받고 하기 때문에 이를 Cookie에 저장해준다.
     */

    dispatch('handleTokenRetrieve', { accessToken: token, activeStatus, userId })

    return result.data
  },

  handleTokenRetrieve (
    { commit, dispatch },
    { accessToken, activeStatus, userId },
  ) {
    const { PRE_ACTIVE, ACTIVE, NOT_ACTIVE } = ACCOUNT_STATUS
    if (activeStatus === ACTIVE) {
      Cookies.set('donghang-token', accessToken, { expires: 7 })
      commit('updateIsAuthenticated', true)
    }
    this.$axios.setToken(accessToken, 'Bearer')

    commit('updateUserId', userId)
    commit('updateActiveStatus', activeStatus)
  },
}
