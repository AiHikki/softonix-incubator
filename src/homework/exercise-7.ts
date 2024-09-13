/* Реалізуйте дженерік версію методу масивів Array.unshift.
Для перевірки наведіть курсор на unshiftCheck */

type TUnshift<T extends unknown[], U> = [U, ...T] // Code here

const unshiftCheck: TUnshift<[1, 2], 0> = [0, 1, 2]

export {
  unshiftCheck
}
