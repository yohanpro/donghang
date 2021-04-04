<template>
  <div class="social-login">
    <div
      id="google-login-button"
      @click="isGoogleButtonClicked =true"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SocialLogin',
  data () {
    return {
      isGoogleButtonClicked: false,
    }
  },
  mounted () {
    this.renderButton()
  },
  methods: {
    ...mapActions('auth', ['signIn']),
    async onGoogleSuccess (googleUser) {
      if (!googleUser || !this.isGoogleButtonClicked) { return }
      const token = googleUser.getAuthResponse().id_token
      const vendor = 'google'

      const payload = {
        token,
        vendor,
      }
      await this.signIn(payload)
    },
    async renderButton () {
      await window.gapi.signin2.render('google-login-button', {
        scope: 'profile email',
        width: 200,
        height: 40,
        onsuccess: this.onGoogleSuccess,
        onfailure: () => {},
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.social-login {
  width: 50%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
}
#google-login-button {
  width: 100%;
  margin-left: -1rem;
}
</style>
