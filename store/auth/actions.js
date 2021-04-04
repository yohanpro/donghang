export const endpoints = {
  token: vendor => `/auth/token?vendor=${vendor}`,
}

/**
 * signIn 로직
 *
 */
export default {
  async signIn (_, { vendor, payload }) {
    try {
      const result = await this.$axios.post(endpoints.token(vendor), payload)
      console.log('🚀 result', result)
    } catch (error) {
      const { data } = error.response
      console.log('에러났음', data)
    }
  },
}
