
export const endpoints = {
  profile: id => `/user?id=${id}`,
}

export default {
  async myProfile ({ userId }) {
    const result = await this.$axios.get(endpoints.profile(userId))
    return result
  },
}
