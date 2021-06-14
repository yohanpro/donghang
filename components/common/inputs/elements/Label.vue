<template>
  <div class="label__wrapper">
    <div
      :style="{ color: labelColor }"
      :class="{
        required: isRequired,
        light: !isLabelBolded
      }"
      v-text="labelTitle"
    />
    <div
      v-if="labelDescription"
      v-text="labelDescription"
    />
  </div>
</template>

<script>
export default {
  name: 'InputLabel',
  props: {
    labelColor: {
      type: String,
      default: '#010101',
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    isLabelBolded: {
      type: Boolean,
      default: true,
    },
    labelTitle: {
      type: String,
      required: true,
    },
    labelDescription: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.label__wrapper {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  height: 24px;
  margin-bottom: 14px;
  > div {
    &:first-child {
      font-weight: bold;
    }
    &:nth-child(2) {
      color: #ccc;
    }
    &.light {
      font-weight: normal;
    }
  }
  .required:first-child::after {
    content: ' *';
    color: $rosy-pink;
  }
}
</style>
