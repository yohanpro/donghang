<template>
  <div class="button-select-wrapper">
    <button
      v-for="selectField in selectArray"
      :key="selectField.value"
      :class="[{selected: selectedField === selectField }, { invalid: isInvalid }]"
      @click="handleSelect(selectField)"
    >
      {{ selectField.placeholder }}
    </button>
  </div>
</template>
<script>
export default {
  name: 'RadioInput',
  props: {
    selectArray: {
      type: Array,
      required: true,
    },
    isInvalid: {
      type: Boolean,
      default: false,
    },
    selectedValue: {
      type: [Number, String],
      default: '',
    },
  },
  data () {
    return {
      selectedField: '',
    }
  },
  created () {
    this.selectedField = this.selectArray.filter((item) => { return item.value === this.selectedValue })[0]
  },
  methods: {
    handleSelect (selectField) {
      this.selectedField = selectField
      this.$emit('inputSelect', selectField)
    },
    getSelectedIndex () {
      return this.selectArray.map((item) => { return item.value }).indexOf(this.selectedValue)
    },
  },
}
</script>
<style lang="scss" scoped>
.button-select-wrapper {
  display: flex;
  flex-grow: 1;
  margin: 0 6px;
}
button {
  margin: 0 6px;
  background-color: #fff;
  border: 1px solid var(--very-light-pink);
  border-radius: 4px;
  padding: 10px 12px;
  flex: 1;
  color: #999;
  text-align: center;
  font-size: 1.4rem;
}

.invalid {
  border: 1px solid #f86884;
}

.selected {
  background: var(--tealish);
  color: #fff;
}
</style>
