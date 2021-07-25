import { CATEGORY_ITEMS } from '~/config/constants'

export const compose = (...funcs) => initialVal => funcs.reduceRight((val, fn) => fn(val), initialVal)
export const pipe = (...funcs) => initialVal => funcs.reduce((val, fn) => fn(val), initialVal)
export const createDateArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => (start + (i * step)).toString())

export const shortenText = (text, maxlength = 25) => text.slice(0, maxlength) + '...'

export const getCategoryItem = () => {
  const categoryItems = CATEGORY_ITEMS.map((category) => {
    return {
      value: category.index.value,
      text: category.name,
    }
  })

  return categoryItems
}
