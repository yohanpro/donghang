export const createDateArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => (start + (i * step)).toString())
