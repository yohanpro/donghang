<template>
  <section class="description">
    <div class="label">
      내용
    </div>
    <v-textarea
      counter
      placeholder="자세한 내용을 입력해주세요"
      background-color="rgba(204, 204, 204, 0.3)"
      clearable
      rows="7"
      solo
      @change="handleTextArea"
    />
  </section>
</template>

<script>
export default {
  name: 'Description',
  props: {
    description: {
      default: '',
      type: String,
    },
  },
  methods: {
    handleTextArea (e) {
      this.$emit('description-input', e)
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .v-text-field__slot {
  padding: 1rem;
}
::v-deep .v-input__control,
::v-deep .v-input__slot {
  // height: 100%;
}
::v-deep .v-text-field.v-textarea {
  border-radius: 4px;
  margin-top: 1rem;

}
.description {
  padding: 1rem;
  height: 20rem;
  border-radius: 8px;
  margin-bottom: 4rem;
}
</style>
