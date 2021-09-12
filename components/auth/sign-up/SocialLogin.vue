<template>
  <div class="social-login">
    <div
      id="google-login-button"
      @click="isGoogleButtonClicked = true"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ACCOUNT_STATUS } from '~/config/constants'
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
    ...mapActions('auth', ['signIn', 'postToken']),
    async onGoogleSuccess (googleUser) {
      if (!googleUser || !this.isGoogleButtonClicked) {
        return
      }
      const token = googleUser.getAuthResponse().id_token
      const vendor = 'google'

      const payload = {
        token,
      }

      await this.handleLogin(payload, vendor)
    },

    async handleLogin (payload, vendor) {
      try {
        const result = await this.postToken({ payload, vendor })
        const { activeStatus } = result

        if (activeStatus === ACCOUNT_STATUS.ACTIVE) {
          this.$router.push('/main/1')
        } else if (activeStatus === ACCOUNT_STATUS.PRE_ACTIVE) {
          this.$router.push('/auth/sign-up/agree-to-terms')
        }
      } catch (err) {
        console.log('handlelogin err ', err)
      }
    },
    async renderButton () {
      await window.gapi.signin2.render('google-login-button', {
        scope: 'profile email',
        width: 250,
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
