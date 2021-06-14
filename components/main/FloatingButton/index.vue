<template>
  <div class="floating-button-container">
    <div class="floating-button__tools">
      <button
        class="floating-button floating-button-newPost"
        :class="{ active: isFloatingButtonActive }"
        @click="goToNewPostPage"
      />
    </div>
    <button
      class="floating-button floating-button-toggle"
      @click="toggleFloatingButton"
    >
      +
    </button>
  </div>
</template>
<script>
export default {
  name: 'FloatingButton',
  data () {
    return {
      isFloatingButtonActive: false,
    }
  },

  methods: {
    toggleFloatingButton () {
      this.isFloatingButtonActive = !this.isFloatingButtonActive
    },
    goToNewPostPage () {
      const { countryId } = this.$route.params
      this.$router.push(`/main/${countryId}/new-post`)
    },
  },
}
</script>

<style lang="scss" scoped>
$close-line-length: 1.64rem;
$close-line-thickness: 2px;
$close-animation-time: 0.3s;
$close-spins: 1;

.floating-button {
  width: 12.5vw;
  height: 12.5vw;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  max-width: 60px;
  max-height: 60px;
  align-items: center;
  box-shadow: 2px 2px 3px #999;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: all $close-animation-time ease-out;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &-newPost {
    background-color: blue;
    background-color: transparent;
    border: none;
    background-image: url('~/assets/images/icons/edit.svg');
    background-size: 3rem;
    background-position: center;
    transform-origin: center;
    transform: scale(0);
  }
  &__tools {
    margin-bottom: 1rem;
  }
  &.active {
    opacity: 1;
    transition: all $close-animation-time ease-out;
    pointer-events: initial;
    transform: scale(1);
    transform-origin: center;
  }
  &-container {
    width: 12.5vw;
    position: fixed;
    right: 5vw;
    bottom: 13vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &-toggle {
    background-color: #0c9;
    border: none;
    color: #fff;
    font-size: 3rem;
    opacity: 1;
    pointer-events: initial;
  }
}
</style>
