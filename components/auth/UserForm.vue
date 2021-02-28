<template>
  <div class="user-form">
    <base-header
      header-title="회원가입"
      is-back-button
      has-right-custom-button
    />

    <div class="field-container">
      <div class="field-label">
        이름
        <div class="required">
          *
        </div>
      </div>
      <div class="field-input-wrapper">
        <div class="field-input">
          <input
            type="text"
            placeholder="성"
          >
          <div
            v-show="checkIsValid()"
            class="invalid-message"
          >
            에러메시지
          </div>
        </div>
        <div class="field-input">
          <input
            type="text"
            placeholder="이름"
          >
          <div
            v-show="checkIsValid()"
            class="invalid-message"
          >
            에러메시지
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SIGN_UP_FIELD } from '~/config/constants'
export default {
  name: 'UserForm',
  components: {
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
  },
  data () {
    return {
      signUpField: SIGN_UP_FIELD,
    }
  },
  methods: {
    checkIsValid (value) {
      return true
    },
  },
}
</script>

<style lang="scss" scoped>
.user-form {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
  flex: 1 1 auto;
}
.field-container {
  margin: 1rem 0;
}
.field-label {
  display: flex;
  font-size: 1.3rem;
  padding: 1rem 1.5rem;
  color: $main-theme-color;
  .required {
    margin-left: 0.5rem;
    color: red;
  }
}
.field-input-wrapper {
  display: flex;
  align-items: center;
  margin: 0 0.6rem;
}
.field-input {
  flex-grow: 1;
  margin: 0 0.7rem;

  input[type='text'] {
    border-radius: 4px;
    width: 100%;
    padding: 1rem 1.2rem;
    border: var(--border-light-gray);
    font-size: 1.4rem;
  }
}
.invalid-message {
  font-size: 1.4rem;
  color: red;
  margin: 0.2rem 0.5rem;
}
</style>
