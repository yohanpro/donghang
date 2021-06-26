<template>
  <v-text-field
    class="picker-input"
    readonly
    solo
    :placeholder="placeHolder"
    :value="selectedData"
    @click="$emit('click')"
  />
</template>

<script>
export default {
  name: 'PickerInput',
  props: {
    placeHolder: {
      type: String,
      default: null,
    },
    prependIcon: {
      type: String,
      default: null,
    },
    selectedData: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .v-text-field__details {
  display: none;
}
.picker-input {
  .prepend-inner-icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
  .append-icon {
    width: 24px;
    height: 24px;
  }
  > ::v-deep .v-input__control {
    input {
      border: none;
      font-size: 1rem;
    }
  }
}
</style>
