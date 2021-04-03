<template>
  <div>
    <h2>로그인하기</h2>
    <div class="login-container">
      <LoginForm />
    </div>
    <SocialLogin />
    <p
      class="signup"
      @click="goToSignUpPage"
    >
      회원가입하기
    </p>
  </div>
</template>

<script>
export default {
  name: 'SignUpGate',
  components: {
    LoginForm: () => import('./LoginForm'),
    SocialLogin: () => import('./SocialLogin'),
  },
  methods: {
    goToSignUpPage () {
      this.$router.push('/auth/sign-up/agree-to-terms')
    },
  },
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 2.8rem;
  text-align: center;
  margin-top: 5rem;
  color: var(--blue-grey);
}

.login-container {
  width: 70%;
  margin: 3rem auto;
  padding: 1rem 3rem;
}
.signup {
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  text-decoration: underline;
  color: $deep-sky-blue;
  cursor: pointer;
}
</style>
