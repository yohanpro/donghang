<template>
  <div class="social-login">
    <div id="google-login-button" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'SocialLogin',
  mounted () {
    this.renderButton()
  },
  methods: {
    onGoogleSuccess (googleUser) {
      if (!googleUser) {
        return
      }
      const token = googleUser.getAuthResponse().id_token
      const vendor = 'google'

      console.log('token', token)
      console.log('vendor', vendor)
    },
    async renderButton () {
      await window.gapi.signin2.render('google-login-button', {
        scope: 'profile email',
        width: 200,
        height: 40,
        longtitle: true,
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
