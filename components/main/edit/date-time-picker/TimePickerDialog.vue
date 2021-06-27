<template>
  <section class="time-picker-dialog">
    <PickerInput
      place-holder="시간 선택"
      :selected-data="selectedTime"
      @click="handleInputClick"
    />
    <base-dialog
      :is-dialog-open="isTimePickerDialogOpen"
      @close="isTimePickerDialogOpen = false"
    >
      <template #content>
        <v-time-picker
          v-if="isTimePickerDialogOpen"
          v-model="selectedTime"
          format="ampm"
          @change="handleTimeSelect"
          @input="handleTimeSelect"
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
export default {
  name: 'TimePickerDialog',
  components: {
    PickerInput: () => import('./PickerInput'),
    BaseDialog: () => import('~/components/common/dialog/BaseDialog'),
  },
  data () {
    return {
      isTimePickerDialogOpen: false,
      isTimeSelected: false,
      selectedTime: '',
      timeObj: {},
      timeString: '',
    }
  },
  methods: {
    handleTimeSelect () {
      this.setTimeObj(this.selectedTime)
      this.formatTime()
      this.$emit('timeSelect', this.timeObj)
      this.isTimeSelected = true
    },
    formatTime () {
      if (this.timeObj.Hours >= 12) {
        this.timeString = `오후 ${(this.timeObj.Hours % 12) || 12}:${this.timeObj.Minutes}`
      } else {
        this.timeString = `오전 ${this.timeObj.Hours}:${this.timeObj.Minutes}`
      }
    },
    setTimeObj (time) {
      const [hours, minutes] = time.split(':')
      this.timeObj = {
        Hours: hours,
        Minutes: minutes,
      }
    },
    onConfirm () {
      if (this.isTimeSelected === true) {
        this.isTimePickerDialogOpen = false
      }
    },
    handleInputClick () {
      this.isTimePickerDialogOpen = true
      this.isTimeSelected = false
    },
  },
}
</script>

<style lang="scss" scoped>
.time-picker-dialog {
  height: 100%;
  flex: 1;
}
</style>
