<template>
  <section
    v-if="calendar"
    class="date-picker-wrapper"
    :style="{ margin: isBig ? '0 16px' : '0 5px' }"
  >
    <div class="date-picker-header-wrapper">
      <img
        :src="require(`~/assets/images/icons/${arrowIcon}.svg`)"
        alt="Left arrow"
        class="left-arrow"
        @click="getMonth('prev')"
      >
      <div>
        {{ calendar.getYear() }}년 {{ calendar.getMonth() + 1 }}월
      </div>
      <img
        :src="require(`~/assets/images/icons/${arrowIcon}.svg`)"
        alt="Right arrow"
        @click="getMonth('next')"
      >
    </div>
    <div class="calendar-content">
      <div
        v-for="weekDay in weekList"
        :key="weekDay.label"
        class="week-days"
        :style="{ height: isBig ? '34px' : '22px'}"
      />
      <div
        v-for="date in dateList"
        :key="date.id"
        class="date-days"
        :style="{ height: isBig ? '54px' : '52px'}"
      >
        <div
          class="date-entity__wrapper"
          :class="{
            'in-range': checkIsInRange(date),
            'start-day': checkIsStartDay(date.fullDate),
            'end-day': checkIsEndDay(date.fullDate),
            'is-unselectable': !checkIsSelectable(date)
          }"
        >
          <div
            v-show="date.isThisMonth && checkIsEndDay(date.fullDate)"
            class="half-background left-half"
          />
          <div
            v-show="date.isThisMonth && checkIsStartDay(date.fullDate) && endDate"
            class="half-background right-half"
          />
          <div
            v-show="date.isThisMonth"
            class="date-entity"
            :class="{
              'is-enabled': checkIsEnabled(date.fullDate),
              saturday: checkIsEnabled(date.fullDate) && date.isSaturday,
              sunday: checkIsEnabled(date.fullDate) && date.isSunday,
              today: checkIsEnabled(date.fullDate) && date.isToday,
              'is-selected': checkIsSelected(date),
            }"
            @click="handleDateSelect(date)"
          >
            {{ date.date }}
          </div>
          <div
            v-if="date.isToday && date.isThisMonth && !(date.isThisMonth && calendar.isSameDay(selectedDate, date.fullDate))"
            class="today-text"
            :class="{ today: checkIsEnabled(date.fullDate) && date.isToday, }"
          >
            오늘
          </div>
        </div>
      </div>
    </div>
    <base-dialog
      :is-dialog-open="isDialogOpen"
      :confirm-color="'green'"
      :dialog-padding="'1.5rem 1rem'"
    >
      <template #content>
        <div>
          일정 기간은 최대 180일까지 <br>선택 가능합니다.
        </div>
      </template>
      <template #footer>
        <div
          @click="isDialogOpen = false"
        >
          확인
        </div>
      </template>
    </base-dialog>
  </section>
</template>

<script>
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths'
import TfCalendar from './TfCalendar'

export default {
  name: 'DatePicker',
  components: {
    BaseDialog: () => import('~/components/common/dialog/BaseDialog'),
  },
  props: {
    availableBookDates: {
      type: Array,
      default: () => [],
    },
    isBig: {
      type: Boolean,
      default: true,
    },
    isRangeSelect: {
      type: Boolean,
      default: true,
    },
    prefilledValue: {
      type: String,
      default: null,
    },
    arrowIcon: {
      type: String,
      default: 'arrow-right',
    },
    maxDays: {
      type: Number,
      required: false,
      default: null,
    },
  },
  data () {
    return {
      calendar: null,
      weekList: [
        { id: 0, label: 'Sun' },
        { id: 1, label: 'Mon' },
        { id: 2, label: 'Tue' },
        { id: 3, label: 'Wed' },
        { id: 4, label: 'Thu' },
        { id: 5, label: 'Fri' },
        { id: 6, label: 'Sat' },
      ],
      dateList: [],
      selectedDate: null,
      startDate: null,
      endDate: null,
      isDialogOpen: false,
    }
  },
  watch: {
    availableBookDates: {
      handler () {
        const firstAvaliableBookDate = this.availableBookDates[0]?.date
        if (firstAvaliableBookDate) {
          const firstAvaliableMonth = new Date(firstAvaliableBookDate)
          const currentCalendarMonth = this.calendar.currentDate
          const gap = differenceInCalendarMonths(firstAvaliableMonth, currentCalendarMonth)
          for (let i = 0; i < gap; i++) {
            this.getMonth('next')
          }
        }
      },
    },
    prefilledValue: {
      immediate: true,
      handler (prefilledValue) {
        this.selectedDate = new Date(this.prefilledValue) ?? null
      },
    },
  },
  created () {
    this.initCalendar()
    this.$EventBus.$on('optionSelectReset', () => { this.selectedDate = null })
  },
  beforeDestroy () {
    this.$EventBus.$off('optionSelectReset')
  },
  methods: {
    initCalendar () {
      this.calendar = new TfCalendar()
      this.dateList = this.calendar.getMonthOfWeeks()
    },
    getMonth (direction) {
      let month = this.calendar.getMonth(this.calendar.currentDate)
      if (direction === 'prev') {
        month--
      } else {
        month++
      }
      this.calendar.setMonth(this.calendar.currentDate, month)
      this.dateList = this.calendar.getMonthOfWeeks()
    },
    handleDateSelect ({ isThisMonth, weekIndex, fullDate }) {
      if (!this.checkIsEnabled(fullDate)) {
        if (this.maxDays) {
          const {
            addDays,
            isAfter,
          } = this.calendar
          const maxDate = addDays(this.startDate, this.maxDays)
          if (isAfter(fullDate, maxDate)) {
            this.isDialogOpen = true
          }
        }
        return
      }
      if (!isThisMonth) {
        if (weekIndex === 0) {
          this.getMonth('prev')
        } else {
          this.getMonth('next')
        }
      }
      if (this.isRangeSelect) {
        const { isBefore, isSameDay } = this.calendar
        if (this.startDate) {
          if (this.endDate) {
            this.startDate = null
            this.endDate = null
            this.$emit('startDateSelect', null)
            this.$emit('endDateSelect', null)
          } else {
            // eslint-disable-next-line no-lonely-if
            if (isSameDay(fullDate, this.startDate)) {
              this.endDate = fullDate
              this.$emit('endDateSelect', this.endDate)
            } else if (isBefore(fullDate, this.startDate)) {
              this.startDate = fullDate
              this.endDate = null
              this.$emit('startDateSelect', this.startDate)
              this.$emit('endDateSelect', null)
            } else {
              // eslint-disable-next-line no-lonely-if
              if (!isSameDay(fullDate, this.startDate)) {
                this.endDate = fullDate
                this.$emit('endDateSelect', this.endDate)
              }
            }
          }
        } else {
          this.startDate = fullDate
          this.$emit('startDateSelect', this.startDate)
        }
      } else {
        this.$emit('startDateSelect', fullDate)
        this.selectedDate = fullDate
      }
    },
    checkIsEnabled (fullDate) {
      if (this.isRangeSelect && this.maxDays && this.startDate) {
        const {
          addDays,
          isBefore,
        } = this.calendar
        const maxDate = addDays(this.startDate, this.maxDays)
        return isBefore(fullDate, maxDate)
      }
      const {
        format,
      } = this.calendar
      const dateAsString = format(fullDate, 'yyyy-MM-dd')
      let isInAvailableBookDate = true
      if (this.availableBookDates.length) {
        isInAvailableBookDate = this.availableBookDates.some(date => date.date === dateAsString && date.count !== 0)
      }
      return isInAvailableBookDate
    },
    checkIsSelected ({ fullDate: date, isThisMonth }) {
      const { isSameDay } = this.calendar
      if (!isThisMonth) { return false }
      if (this.isRangeSelect) {
        return isSameDay(this.startDate, date) || isSameDay(this.endDate, date)
      } else {
        return isSameDay(this.selectedDate, date)
      }
    },
    checkIsSelectable ({ fullDate: date }) {
      const {
        isAfter,
      } = this.calendar
      return isAfter(date, new Date())
    },
    checkIsInRange ({ fullDate: date, isThisMonth }) {
      const {
        isAfter,
        isBefore,
      } = this.calendar
      const isAfterStartDate = isAfter(date, this.startDate)
      const isBeforeEndDate = isBefore(date, this.endDate)
      return isAfterStartDate && isBeforeEndDate && isThisMonth
    },
    checkIsStartDay (date) {
      const { isSameDay } = this.calendar
      return this.isRangeSelect && isSameDay(this.startDate, date)
    },
    checkIsEndDay (date) {
      const { isSameDay } = this.calendar
      return this.isRangeSelect && isSameDay(this.endDate, date)
    },
  },
}
</script>

<style lang="scss" scoped>
.date-picker-wrapper {
  margin-top: 10px;
  background-color: #fff;
  padding: 15px 0;
  .date-picker-header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 40px);
    height: 28px;
    margin: 0 auto;
    margin-bottom: 20px;
    img {
      height: 26px;
    }
    .left-arrow {
      transform: rotate(180deg);
    }
  }
  .calendar-title {
    font-size: 16px;
    font-weight: bold;
    padding: 0px 15px 15px;
  }
  .calendar-content {
    text-align: center;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    .week-days {
      color: #999;
    }
    .date-days {
      color: #ccc;
      .date-entity__wrapper {
        position: relative;
        height: 36px;
        .date-entity {
          $date-size: 36px;
          text-align: center;
          margin: 0 auto;
          width: $date-size;
          height: $date-size;
          line-height: $date-size;
          color: #ccc;
          cursor: not-allowed;
        }
        .is-enabled {
          color: #010101;
          cursor: pointer;
        }
        .saturday, .sunday {
          color: $strawberry;
        }
        .today {
          color: $deep-sky-blue;
        }
        .today-text {
          margin-top: -.5rem;
          font-size: 10px;
        }
        .is-selected {
          color: #fff;
          background-color: $tealish;
          border-radius: 50%;
        }
      }
      .is-unselectable {
        .date-entity:not(.today)  {
          color: #ccc;
        }
      }
    }
    .in-range {
      background-color: rgba(30, 190 ,174 , 0.2);
    }
    .half-background {
      background-color: rgba(30, 190 ,174 , 0.2);
      position: absolute;
      height: 100%;
      width: 50%;
    }
    .left-half {
      left: 0;
    }
    .right-half {
      right: 0;
    }
  }
}
</style>
