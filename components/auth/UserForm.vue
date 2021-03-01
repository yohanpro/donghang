<template>
  <div class="user-form">
    <base-header
      header-title="회원가입"
      is-back-button
      has-right-custom-button
    />
    <div
      v-for="fieldEntity in signUpField"
      :key="fieldEntity.label"
      class="field-container"
    >
      <div class="field-label">
        {{ fieldEntity.label }}
        <div
          v-show="fieldEntity.required"
          class="required"
        >
          *
        </div>
      </div>
      <div class="field-input-wrapper">
        <div
          v-for="(field, index) in fieldEntity.fields"
          :key="index"
          class="field-input"
        >
          <input
            v-if="fieldEntity.type === 'text'"
            :type="fieldEntity.type"
            :placeholder="field.placeholder"
            @input="handleInputChange($event.target.value, field)"
            @keyup="validateInput(field)"
          >
          <div
            v-else-if="fieldEntity.type == 'nickname'"
          >
            <div class="field-nickname">
              <input
                type="text"
                :placeholder="fieldEntity.fields[0].placeholder"
              >
              <button
                class="nickname__check-button"
                @click="checkNickname"
              >
                중복확인
              </button>
            </div>
            <div class="hint-message">
              한글/영문/숫자/특수문자 (! # $ % * _ ~) 만 사용 가능합니다.
            </div>
          </div>

          <div
            v-show="!checkIsValid(field)"
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
      userInfo: {
        first_name: { isDirty: null, isValid: null },
        last_name: { isDirty: null, isValid: null },
        nickname: { isDirty: null, isValid: null },
        email: { isDirt: null, isValid: null },
        phone: { isDirty: null, isValid: null },
        gender: { isDirty: null, isValid: null },
        year: { isDirty: null, isValid: null },
        month: { isDirt: null, isValid: null },
        day: { isDirty: null, isValid: null },
      },
    }
  },
  methods: {
    checkIsValid ({ name }) {
      if (!this.userInfo[name]) { return false }

      const { isDirty, isValid } = this.userInfo[name]

      return !isDirty || isValid
    },
    checkNickname () {

    },
    handleInputChange (value, field, el) {
      this.userInfo[field.name].isDirty = true
      this.userInfo[field.name].value = value
    },
    validateInput (field) {
      const { name, regex } = field

      const targetValue = this.userInfo[name]
      const reg = new RegExp(regex)
      const res = reg.test(targetValue)

      this.userInfo[name].isValid = res
    },
  },
}
</script>

<style lang="scss" scoped>
.hint-message {
  color: #ccc;
  font-size: 1.2rem;
  margin: 0 0.75rem;
}
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
  // align-items: center;
  margin: 0 0.6rem;
}
.field-nickname {
  width: 100%;
  display: flex;
  align-items: stretch;
}
.nickname__check-button {
  font-size: 1.3rem;
  border: var(--border-light-gray);
  border-radius: 4px;
  flex-basis: 25%;
  text-align: center;
  margin-left: 1rem;
  background-color: $main-theme-color;
  color: $main-font-color;
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
