<template>
  <img
    :src="require(`~/assets/images/icons/checkbox-${fileSuffix}.svg`)"
    alt="Checkbox"
    :style="{ width: checkboxWidth }"
    :class="{ 'bottom-and-right-space': isItineraryItem }"
    @click.stop="handleCheck(!isChecked)"
  >
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    checkColor: {
      type: String,
      default: 'green',
    },
    checkboxWidth: {
      type: String,
      default: '18px',
    },
    isChecked: {
      type: Boolean,
      default: true,
    },
    isItineraryItem: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fileSuffix () {
      return this.isChecked ? this.checkColor : 'empty'
    },
  },
  mounted () {
    this.isPreChecked && this.handleCheck(true)
  },
  methods: {
    handleCheck (isChecked) {
      this.$emit('change', isChecked)
    },
  },
}
</script>

<style lang="scss" scoped>
.bottom-and-right-space {
  margin-right: 1rem;
  padding-bottom: .75rem;
}
</style>
