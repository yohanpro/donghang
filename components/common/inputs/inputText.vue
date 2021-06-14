<template>
  <div class="input-text__container">
    <InputLabel
      :label-color="labelColor"
      :is-required="isRequired"
      :is-label-bolded="isLabelBolded"
      :label-title="labelTitle"
    />
    <div class="input__wrapper">
      <input
        v-model="message"
        type="text"
        :maxlength="maxLength"
        :placeholder="inputPlaceholder"
        :class="{
          'warning-border': isWarningShown,
          'right-padding': isCountShown,
        }"
        @input.prevent="handleInput($event.target.value)"
      >
      <div
        v-if="isCountShown"
        class="character-count"
        :class="{ 'too-long-title': message.length > maxInput }"
      >
        ({{ message.length }}/ {{ maxInput }})
      </div>
    </div>
    <WarningMessage
      :is-warning-shown="isWarningShown"
      :warning-message="warningMessage"
    />
  </div>
</template>

<script>
export default {
  name: 'InputText',
  components: {
    InputLabel: () => import('./elements/Label'),
    WarningMessage: () => import('./elements/WarningMessage'),
  },
  props: {
    labelColor: {
      type: String,
      default: '#010101',
    },
    prefilledValue: {
      type: String,
      default: '',
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    labelTitle: {
      type: String,
      required: true,
    },
    isLabelBolded: {
      type: Boolean,
      default: true,
    },
    inputPlaceholder: {
      type: String,
      default: '',
    },
    maxLength: {
      type: Number,
      default: 524288,
    },
    isCountShown: {
      type: Boolean,
      default: false,
    },
    isWarningShown: {
      type: Boolean,
      default: false,
    },
    warningMessage: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      message: '',
      maxInput: 50,
    }
  },
  mounted () {
    if (this.prefilledValue) {
      this.$nextTick(() => {
        this.message = this.prefilledValue
      })
    }
  },
  methods: {
    handleInput (value) {
      if (value.length > this.maxLength) {
        this.handleInput(value.substring(0, value.length))
        return
      }
      this.message = value
      this.$emit('change', value)
    },
  },
}
</script>

<style lang="scss" scoped>
.input-text__container {
  height: 138px;
  .input__wrapper {
    position: relative;
    input {
      height: 3.125rem;
      font-size: 14px;
      &::placeholder {
        color: #999;
        opacity: 1;
      }
    }
    .right-padding {
      padding-right: 4rem;
    }
    .character-count {
      position: absolute;
      color: #ccc;
      font-size: 14px;
      top: 15px;
      right: 12px;
    }
    .too-long-title {
      color: $rosy-pink;
    }
  }
}
</style>
