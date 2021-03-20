<template>
  <section class="tag-area">
    <p
      v-for="tag in concatedTags"
      :key="tag"
    >
      # {{ tag }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'TagArea',
  props: {
    tags: {
      type: Array,
      required: true,
    },
    isOnlyWoman: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      concatedTags: [],
    }
  },
  created () {
    this.concatedTags = this.tags
    if (this.isOnlyWoman) {
      this.concatedTags.push('여자만')
    }
  },
}
</script>
<style lang="scss" scoped>
.tag-area {
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: rebeccapurple;
    font-weight: 500;
    font-size: 1.2rem;
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
</style>
