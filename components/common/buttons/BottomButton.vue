<template>
  <div
    id="bottom-button"
    class="bottom-button-wrapper"
    :style="{ width: buttonWidth }"
  >
    <button
      :disabled="isDisabled"
      :style="{
        'background-color': buttonColor,
      }"
      class="button-scale-transform"
      @click="$emit('click')"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'BottomButton',
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    buttonColor: {
      type: String,
      default: 'var(--tealish)',
    },
    buttonText: {
      type: String,
      default: 'OK',
    },
    buttonWidth: {
      type: String,
      default: '100%',
    },
  },
}
</script>

<style lang="scss" scoped>
.bottom-button-wrapper {
  margin: 1rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  button {
    border-radius: 2px;
    color: white;
    padding: 15px 0;
    width: 100%;
    font-size: 1.5rem;
    &:disabled {
      background-color: #ececec !important;
      color: #ccc;
    }
  }
  .white {
    color: var(--tealish) !important;
    border: 1px solid var(--tealish);
    background-color: #fff !important;
  }
}
</style>
