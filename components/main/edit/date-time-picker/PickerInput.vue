<template>
  <v-text-field
    class="picker-input"
    solo
    :placeholder="placeHolder"
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

<style scss scoped>
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
    min-height: 50px;
    input {
      border: none;
      font-size: 14px;
    }
    > .v-input__slot {
      padding: 15px 12px !important;
    }
  }
}
</style>
