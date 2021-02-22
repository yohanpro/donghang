<template>
  <div
    class="base-button__wrapper"
  >
    <button
      :style="{
        width: buttonWidth,
        height: isSmall ? '36px' : '48px',
      }"
      :class="[buttonVariant]"
      :disabled="isDisabled"
      @click="$emit('click')"
      v-text="buttonText"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    buttonText: {
      type: String,
      default: '',
    },
    buttonVariant: {
      type: String,
      default: 'outline-primary',
    },
    buttonWidth: {
      type: String,
      default: '100%',
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  // primary
  // link
}
</script>

<style lang="scss" scoped>
.base-button__wrapper {
  > button {
    border-radius: 4px;
    transition: all .2s;
    &:disabled {
      cursor: not-allowed;
    }
    &.primary {
      color: #fff;
      background-color: $deep-sky-blue !important;
      &:hover:enabled {
        color: $deep-sky-blue;
        background-color: #fff !important;
        border: 1px solid $deep-sky-blue;
      }
    }
    &.primary-not-hover {
      color: #fff;
      background-color: $deep-sky-blue !important;
    }
    &.green {
      color: #fff;
      background-color: $greeny-blue !important;
      &:hover:enabled {
        color: $greeny-blue;
        background-color: #fff !important;
        border: 1px solid $greeny-blue;
      }
    }
    &.default {
      color: #fff;
      background-color: #7a7a7a;
      &:hover:enabled {
        color: #7a7a7a;
        background-color: #fff;
        border: 1px solid #7a7a7a;
      }
    }
    &.outline-default {
      color: #7a7a7a;
      border: 1px solid $greyish-brown;
      &:hover:enabled {
        color: #fff;
        background-color: $greyish-brown;
      }
    }
    &.outline-primary {
      color: $deep-sky-blue;
      border: 1px solid $deep-sky-blue;
      &:hover:enabled {
        color: #fff;
        background-color: $deep-sky-blue;
      }
    }
    &.outline-secondary {
      color: $brown-grey;
      border: 1px solid $brown-grey;
      &:hover:enabled {
        color: #fff;
        background-color: $brown-grey;
      }
    }
    &.danger {
      color: #fff;
      background-color: $salmon;
      &:hover:enabled {
        color: $salmon;
        background-color: #fff !important;
        border: 1px solid $salmon;
      }
    }
    &.outline-danger {
      color: $salmon;
      border: 1px solid $salmon;
      &:hover:enabled {
        color: #fff;
        background-color: $salmon;
      }
    }
  }
}
@media (min-width: $tablet) {
  .base-button__wrapper > button {
    width: 100% !important;
  }
}
</style>
