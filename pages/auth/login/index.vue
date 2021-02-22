<template>
  <div>
    <SignUpGate />
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  components: {
    SignUpGate: () => import('~/components/auth/sign-up'),
  },
}
</script>

<style lang="scss">

</style>
