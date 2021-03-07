<template>
  <div>
    <v-select
      :label="defaultValue"
      :items="selectArray"
      :value="selectedValue"
      :disabled="isDisabled"
      solo
      append-icon="mdi-chevron-down"
      @input="$emit('inputSelect', $event)"
    />
  </div>
</template>

<script>
export default {
  name: 'SelectInput',
  props: {
    placeHolder: {
      type: String,
      required: true,
    },
    selectArray: {
      type: Array,
      required: true,
    },
    isInvalid: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    selectedValue: {
      type: [String, Number, Object],
      default: '',
    },
  },
  computed: {
    defaultValue () {
      return this.selectedValue ? this.selectedValue : this.placeHolder
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .v-list-item__title {
  font-size: 1.4rem;
  text-align: center;
}
.v-input__control {
  height: 0;
}
.v-select__slot {
  background: #fff;
  border: 1px solid #e7e7e7;
  height: 40px;
  input {
    border: none;
  }
}

// v-icon {
//   color: #d8d8d8 !important;
// }
</style>
