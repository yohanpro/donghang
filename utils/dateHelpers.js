import { format } from 'date-fns'
import dayjs from 'dayjs'
import Vue from 'vue'
import { pipe } from './helplers'

export const formatDate = (
  date,
  dateFormat = 'yyyy.MM.dd. HH:mm',
  options = {},
) => {
  try {
    date = new Date(date)
    return format(date, dateFormat, options)
  } catch (error) {
    return date
  }
}

export const calculatePassedTime = (startTime, updateTime = false) => {
  const from = dayjs(startTime)

  let convertedTimeObj = {
    diff: null,
    type: null,
  }

  const dayDiff = dayjs().diff(from, 'day')
  const minuteDiff = dayjs().diff(from, 'minute')
  const secondsDiff = dayjs().diff(from, 'second')
  if (dayDiff > 0) {
    convertedTimeObj = {
      diff: dayDiff,
      type: 'day',
    }
  } else if (minuteDiff > 0) {
    convertedTimeObj = {
      diff: minuteDiff,
      type: 'minute',
    }
  } else if (secondsDiff > 0) {
    convertedTimeObj = {
      diff: secondsDiff,
      type: 'second',
    }
  }

  return convertedTimeObj
}

export const dateDiffconvertToString = ({ diff, type }) => {
  let differenceText = ''
  switch (type) {
    case 'minute':
      differenceText = diff + '분 전'
      break
    case 'day':
      differenceText = diff + '일 전'
      break
    case 'second':
      differenceText = '방금'
      break
    default:
      break
  }

  return differenceText
}

export const getTimeDiff = time =>
  pipe(calculatePassedTime, dateDiffconvertToString)(time)

// export const getTimeDiff = time => Vue.prototype.$pipe(calculatePassedTime, dateDiffconvertToString)(time)
