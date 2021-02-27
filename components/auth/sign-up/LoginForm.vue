<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    />
    <v-text-field
      v-model="passwod"
      :rules="passwordRules"
      label="Password"
      type="password"
      autocomplete="on"
      required
    />

    <v-btn
      :disabled="!valid"
      color="primary"
      right
      block
      large
      @click.prevent="submit"
    >
      로그인
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    valid: false,
    passwod: '',
    passwordRules: [
      v => !!v || 'passwordRules is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    submit () {
      console.log('submit')
    },
  },
}
</script>

<style lang="scss" scoped>
form {
  height: 100%;
}
.v-btn {
  font-size: 1.5rem;
  margin-top: 5rem;

}

</style>
