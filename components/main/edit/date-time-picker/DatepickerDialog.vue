<template>
  <div class="date-picker-dialog">
    <PickerInput
      place-holder="날짜선택"
      @click="hanldeInputClick"
    />
    <base-dialog
      :is-dialog-open="isDatePickerDialogOpen"
      @close="isDatePickerDialogOpen = false"
    >
      <template #content>
        <DatePicker
          v-if="isDatePickerDialogOpen"
          :is-range-select="false"
          @startDateSelect="handleDateSelect"
        />
      </template>
      <template #footer>
        <div @click="onConfirm">
          선택
        </div>
      </template>
    </base-dialog>
  </div>
</template>

<script>
export default {
  name: 'DatePickerDialog',
  components: {
    PickerInput: () => import('./PickerInput'),
    BaseDialog: () => import('~/components/common/dialog/BaseDialog'),
    DatePicker: () => import('~/components/common/date-picker'),
  },
  data () {
    return {
      isDatePickerDialogOpen: false,
      isDateSelected: false,
      selectedDate: '',
      dateObj: {},
    }
  },
  methods: {
    hanldeInputClick () {
      console.log('detapickercicl')
      this.isDatePickerDialogOpen = true
    },
    handleDateSelect () {
      console.log('handledateSelect')
    },
  },
}
</script>

<style lang="scss" scoped>
.date-picker-dialog {
  margin-right: 6px;
  flex: 1;
  margin-top: 1rem;
}

::v-deep .base-dialog__wrapper .base-dialog__container .dialog-content {
  padding: 0 !important;
}
::v-deep .date-picker-wrapper .date-picker-header-wrapper {
  width: 100% !important;
  margin: 0 0 25px 0 !important;
}
::v-deep .date-picker-wrapper .calendar-content .date-days {
  font-size: 14px;
}
</style>
