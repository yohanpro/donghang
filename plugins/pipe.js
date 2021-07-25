export default ({ app }, inject) => {
  inject('pipe', (...funcs) => initialVal => funcs.reduce((val, fn) => fn(val), initialVal))
}
