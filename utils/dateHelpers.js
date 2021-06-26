import {
  parse as parseDate,
  format,
  differenceInMilliseconds,
  addMilliseconds,
  addMinutes,
} from 'date-fns'

import locale from 'date-fns/locale/ko'

export const formatDate = (date, dateFormat = 'yyyy.MM.dd. HH:mm', options = {}) => {
  try {
    date = new Date(date)
    return format(date, dateFormat, options)
  } catch (error) {
    console.log(date)
    return date
  }
}
