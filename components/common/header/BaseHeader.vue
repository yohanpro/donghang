<template>
  <v-app-bar
    :fixed="isFixed"
    :color="headerColor"
    extension-height="fit-content"
    elevate-on-scroll
    width="100vw"
    height="56px"
  >
    <slot name="header-left">
      <img
        v-show="isBackButton"
        src="~/assets/images/icons/back.svg"
        alt="Back Button"
        class="back-button"
        @click="handleGoBack()"
      >
    </slot>
    <div class="header-title">
      <h2>
        {{ headerTitle }}
      </h2>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    headerTitle: {
      type: String,
      default: null,
    },
    isFixed: {
      type: Boolean,
      default: true,
    },
    isBackButton: {
      type: Boolean,
      default: false,
    },
    headerColor: {
      type: String,
      default: '#fff',
    },
  },

  methods: {
    handleGoBack () {
      if (this.backFunction) {
        this.backFunction()
      } else {
        window.history.go(-1)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.back-button {
  position: absolute;
}
.header-title {
  flex-grow: 1;
  text-align: center;
  > h2 {
    color: #333;
    font-size: 1.6rem;
    font-weight: bold;
  }
}
</style>
