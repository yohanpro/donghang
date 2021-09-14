
export const endpoints = {
  profile: id => `/user?id=${id}`,
}

export default {
  async fetchProfile ({ commit }, userId) {
    const result = await this.$axios.get(endpoints.profile(userId))
    commit('updateProfileObj', result)
  },
}
