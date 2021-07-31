<template>
  <div class="main">
    <div class="main__text">
      {{ contents.text }}
    </div>
    <div class="main__images">
      <img
        v-for="image in contents.imageURL"
        :key="image"
        :src="image"
        alt="Image"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailMain',
  props: {
    contents: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;

  &__text {
    font-size: 1.3rem;
  }
  &__images {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    img {
      width: 100%;
      height: 'auto';
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }
}
</style>
