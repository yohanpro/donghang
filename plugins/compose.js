
export default (_, inject) => {
  inject('compose', (...funcs) => initialVal => funcs.reduceRight((val, fn) => fn(val), initialVal))
}
