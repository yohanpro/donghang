<template>
  <div>
    <UserForm
      is-sign-up
    />
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  components: {
    UserForm: () => import('~/components/auth/UserForm'),
  },
  layout: 'with-header',
}
</script>
