import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  getYear,
  getMonth,
  getDate,
  getDay,
  isSameMonth,
  isSameDay,
  addDays,
  isBefore,
  isAfter,
  format,
  setMonth,
  setDate,
} from 'date-fns'

class TfCalendar {
  constructor (config = {}) {
    this.currentDate = config.date || new Date()
  }

  getCurrentDate () {
    return this.currentDate
  }

  getMonthOfWeeks (date = this.currentDate) {
    const list = eachDayOfInterval({
      start: startOfWeek(startOfMonth(date)),
      end: endOfWeek(endOfMonth(date)),
    })

    let week = 0
    const today = new Date()
    return list.map((innerDate, index) => {
      if (getDate(innerDate) === getDate(endOfWeek(innerDate))) {
        week += 1
      }
      return {
        id: index,
        fullDate: innerDate,
        date: getDate(innerDate),
        isSaturday: getDay(innerDate) === 6,
        isSunday: getDay(innerDate) === 0,
        isToday: isSameDay(innerDate, today),
        isThisMonth: isSameMonth(date, innerDate),
        weekIndex: getDate(innerDate) === getDate(endOfWeek(innerDate)) ? week - 1 : week,
      }
    })
  }

  getYear (date = this.currentDate) {
    return getYear(date)
  }

  getMonth (date = this.currentDate) {
    return getMonth(date)
  }

  setMonth (originalDate, date) {
    this.currentDate = setMonth(originalDate, date)
  }

  setDate (originalDate, date) {
    this.currentDate = setDate(originalDate, date)
  }

  format (date, dateFormat) {
    return format(date, dateFormat)
  }

  isSameMonth (...args) { return isSameMonth(...args) }
  isSameDay (...args) { return isSameDay(...args) }
  addDays (...args) { return addDays(...args) }
  isBefore (...args) { return isBefore(...args) }
  isAfter (...args) { return isAfter(...args) }
}

export default TfCalendar
