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
      <div
        v-if="fieldEntity.type !== 'nickname'"
        class="field-input-wrapper"
      >
        <div
          v-for="(field, index) in fieldEntity.fields"
          :key="index"
          class="field-input"
        >
          <input
            v-if="fieldEntity.type === 'text'"
            :type="fieldEntity.type"
            :class="{ invalid: !checkIsValid(field) }"
            :placeholder="field.placeholder"
            @input="handleInputChange($event.target.value, field)"
            @keyup="validateInput(field)"
            @focus="handleFocus(field.name)"
            @keydown.space.prevent
          >
          <div v-else-if="fieldEntity.type === 'select'">
            <SelectInput
              :place-holder="field.placeholder"
              :select-array="dateArray[index]"
              :selected-value="userInfo[field.name].value"
              :is-invalid="!checkIsValid(field)"
              :is-disabled="
                field.name === 'day' && !isBirthdayYearAndMonthSelected
              "
              @inputSelect="handleInputChange($event, field)"
            />
          </div>
          <div
            v-show="!checkIsValid(field)"
            class="invalid-message"
          >
            {{ getErrorMessage(field.name) }}
          </div>
        </div>
      </div>
      <div v-if="fieldEntity.type == 'nickname'">
        <div class="field-nickname field-input">
          <input
            type="text"
            :class="{ invalid: !isNicknameValid }"
            :placeholder="fieldEntity.fields[0].placeholder"
            @keyup="validateInput(fieldEntity.fields[0])"
            @focus="handleFocus(fieldEntity.fields[0].name)"
            @input="
              handleInputChange($event.target.value, fieldEntity.fields[0])
            "
          >
          <button
            class="nickname__check-button"
            @click="handleNicknameCheck"
          >
            중복확인
          </button>
        </div>
        <div class="hint-message hint-message-nickname">
          한글/영문/숫자/_만 사용 가능합니다.
        </div>

        <div
          v-if="!userInfo.nick_name.isChecked"
          class="invalid-message invalid-message-nickname"
        >
          {{ nicknameErrorMessage }}
        </div>
      </div>
      <radio-input
        v-else-if="fieldEntity.type === 'radio'"
        :is-invalid="false"
        :select-array="fieldEntity.fields"
        :selected-value="userInfo.gender.value"
        @inputSelect="handleRadioInputChange($event)"
      />
    </div>
    <BottomButton
      button-text="회원가입하기"
      button-width="95%"
      :is-disabled="!isAllValid"
    />
  </div>
</template>

<script>
import { getDaysInMonth } from 'date-fns'
import { SIGN_UP_FIELD } from '~/config/constants'
import { checkNickname } from '~/config/dummy'
import { createDateArray } from '~/utils/helplers'

export default {
  name: 'UserForm',
  components: {
    BaseHeader: () => import('~/components/common/header/BaseHeader'),
    RadioInput: () => import('~/components/common/inputs/RadioInput'),
    SelectInput: () => import('~/components/common/inputs/SelectInput'),
    BottomButton: () => import('~/components/common/buttons/BottomButton'),
  },
  data () {
    return {
      signUpField: SIGN_UP_FIELD,
      nameErrorMessage: '1~30자, 특수문자 제외',
      nicknameErrorMessage: '중복확인 체크를 해주세요',
      dateArray: [],
      userInfo: {
        first_name: { isDirty: null, isValid: null, isRequired: true },
        last_name: { isDirty: null, isValid: null, isRequired: true },
        nick_name: {
          isDirty: null,
          isValid: null,
          isRequired: true,
          isChecked: false,
        },
        email: { isDirty: null, isValid: null, isRequired: true },
        phone: { isDirty: null, isValid: null, isRequired: true },
        gender: { isDirty: null, isValid: null, isRequired: true },
        year: { isDirty: null, isValid: null, isRequired: true, value: null },
        month: { isDirty: null, isValid: null, isRequired: true, value: null },
        day: { isDirty: null, isValid: null, isRequired: true, value: null },
      },
    }
  },
  computed: {
    isNicknameValid () {
      if (!this.userInfo.nick_name) {
        return false
      }
      const { isDirty, isValid, isChecked } = this.userInfo.nick_name
      return !isDirty || (isValid && isChecked)
    },
    isBirthdayYearAndMonthSelected () {
      return !!(this.userInfo.year.value && this.userInfo.month.value)
    },
    isNicknameCheckNeeded () {
      if (!this.userInfo.nick_name) {
        return false
      }
      const { isValid, isChecked, value } = this.userInfo.nick_name
      return value.length && isValid && !isChecked
    },
    isAllValid () {
      const isAllFilled = Object.keys(this.userInfo)
        .map((key) => {
          const { isValid, isDirty, isRequired } = this.userInfo[key]
          return (
            (isRequired && isValid) || (!isRequired && (!isDirty || isValid))
          )
        })
        .every(valid => valid)
      return isAllFilled && !this.isNicknameCheckNeeded
    },
  },
  created () {
    const thisYear = new Date().getFullYear()
    const yearArray = createDateArray(thisYear, thisYear - 120, -1)
    const monthArray = createDateArray(1, 12, 1)
    const dayArray = createDateArray(1, 31, 1)
    this.dateArray = [yearArray, monthArray, dayArray]
  },
  methods: {
    checkIsValid ({ name }) {
      if (!this.userInfo[name]) {
        return false
      }
      const { isDirty, isValid } = this.userInfo[name]
      return !isDirty || isValid
    },
    handleRadioInputChange (selected) {
      this.userInfo[selected.name].value = selected.value
      this.userInfo[selected.name].isDirty = this.userInfo[
        selected.name
      ].isValid = true
    },
    async handleNicknameCheck () {
      if (!this.userInfo.nick_name) {
        return true
      }
      const isNickNameAvailable = await checkNickname(
        this.userInfo.nick_name.value,
      )
      if (isNickNameAvailable) {
        this.userInfo.nick_name.isChecked = true
        this.userInfo.nick_name.isDirty = false
      }
    },
    handleInputChange (value, field) {
      if (!field.regex) {
        this.userInfo[field.name].isValid = true
      }
      this.userInfo[field.name].isDirty = true
      this.userInfo[field.name].value = value

      if (field.name === 'month' || field.name === 'year') {
        this.updateDayArray(field.name)
      }
    },
    updateDayArray (field) {
      const { month, year } = this.userInfo
      const lastDayOfMonth = getDaysInMonth(new Date(year.value, month.value - 1))
      const dayArray = createDateArray(1, lastDayOfMonth, 1)
      this.dateArray[2] = dayArray
      if (field === 'month') {
        this.userInfo.day.value = '1'
        this.userInfo.day.isValid = true
      }
    },
    validateInput (field) {
      const { name, regex } = field
      const targetValue = this.userInfo[name].value
      const reg = new RegExp(regex)
      const res = reg.test(targetValue)
      this.userInfo[name].isValid = res
    },
    handleFocus (name) {
      this.userInfo[name].isDirty = true
    },

    getErrorMessage (name) {
      switch (name) {
        case 'last_name' || 'first_name':
          return this.nameErrorMessage
        case 'nick_name':
          return this.nicknameErrorMessage
        default:
          return '형식이 올바르지 않습니다'
      }
    },
    handleSubmit () {
      console.log('submittted')
      this.$router.push('/auth/sign-up/welcome')
    },
  },
}
</script>

<style lang="scss" scoped>
.hint-message {
  color: #ccc;
  font-size: 1.2rem;
  margin: 0 0.75rem;
  &-nickname {
    margin: 0 1.2rem;
  }
}
.invalid-message {
  font-size: 1.4rem;
  color: red;
  margin: 0.2rem 0.5rem;

  &-nickname {
    margin: 0.2rem 1.2rem;
  }
}
.user-form {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
  flex: 1 1 auto;
  padding: 0 0.5rem;
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
  margin: 0 0.6rem;
}

.field-nickname.field-input {
  display: flex;
  align-items: stretch;
  margin: 0 1.2rem;
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
    &.invalid {
      border: 1px solid red;
    }
  }
}
</style>
