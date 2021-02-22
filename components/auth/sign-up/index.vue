<template>
  <div>
    <h2>로그인하기</h2>
    <div class="login-container">
      <LoginForm />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpGate',
  components: {
    LoginForm: () => import('./LoginForm'),
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
  margin: 5rem auto;
  padding: 1rem 3rem;
}
</style>
