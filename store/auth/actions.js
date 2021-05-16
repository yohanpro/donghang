import Cookies from 'js-cookie'
import { parseToken } from '~/utils/tokenParser'
export const endpoints = {
  token: vendor => `/auth/token?vendor=${vendor}`,
  refreshToken: '/auth/refresh_token',
}

/**
 * signIn 로직
 *
 */
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
    if (!currentToken) { return false }

    const refreshTokenPayload = {
      token: currentToken,
    }
    try {
      const result = await this.$axios.$post(endpoints.refreshToken, refreshTokenPayload)
      const { accessToken, account_status: accountStatus } = result

      dispatch('handleTokenRetrieve', {
        accessToken,
        accountStatus,
      })
      return accountStatus
    } catch (error) {
      return false
    }
  },
  async postToken ({
    dispatch,
    commit,
  }, { payload, vendor }) {
    const result = await this.$axios.post(endpoints.token(vendor), payload)

    const { accessToken, account_status: accountStatus } = result.data
    /**
     * 백엔드에서 토큰을 받았을 경우
     * 받아온 토큰을 다시 retrive 해주어야 한다.
     * 이제 이 토큰으로 계속 주고 받고 하기 때문에 이를 Cookie에 저장해준다.
     */
    // this.handleTokenRetrieve({ accountStatus, accessToken })
    dispatch('handleTokenRetrieve', { accessToken, accountStatus })
    return result.data
  },

  handleTokenRetrieve ({ commit, dispatch }, {
    accessToken,
    accountStatus,
  }) {
    /**
     * Retrieve에서 하는 일 :
     * 1. cookie에 access token 저장
     * 2. active, preactive인 유저 판단하여 로직 수행
     * 3. axios에 bearer 토큰 set
     */

    const parsedToken = parseToken(accessToken)
    console.log('🚀 ~ file: actions.js ~ line 55 ~ parsedToken', parsedToken)

    Cookies.set('donghang-token', accessToken, { expires: 7 })
    this.$axios.setToken(accessToken, 'Bearer')
    commit('updateAccountStatus', accountStatus)
  },
}
