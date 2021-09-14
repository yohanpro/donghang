export const mutations = {
  updateProfileObj (state, profileObj) {
    state.profileObj = profileObj
  },
}

export const state = () => ({
  profileObj: {},
})
