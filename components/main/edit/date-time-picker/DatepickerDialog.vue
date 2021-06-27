<template>
  <section class="date-picker-dialog">
    <PickerInput
      place-holder="날짜선택"
      :selected-data="selectedDate"
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
  </section>
</template>

<script>
import { formatDate } from '~/utils/dateHelpers'

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
      this.isDatePickerDialogOpen = true
    },
    handleDateSelect (date) {
      date = new Date(date)
      this.setDateObj(date)
      this.selectedDate = formatDate(date, 'yyyy-MM-dd')
      this.$emit('dateSelect', this.dateObj)
      this.isDateSelected = true
    },
    setDateObj (date) {
      this.dateObj = {
        Year: date.getFullYear(),
        Month: date.getMonth(),
        Date: date.getDate(),
      }
    },
    onConfirm () {
      if (this.isDateSelected === true) {
        this.isDatePickerDialogOpen = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.date-picker-dialog {
  margin-right: 6px;
  flex: 1;
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
