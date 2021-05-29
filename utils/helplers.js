export const createDateArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => (start + (i * step)).toString())

export const shortenText = (text, maxlength = 25) => text.slice(0, maxlength) + '...'
