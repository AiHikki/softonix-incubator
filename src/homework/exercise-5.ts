/* Реалізуйте тип утиліти TMyIf<C, T, F>, який приймає умову C, правдиве значення T і хибне значення F.
Очікується, що C буде або true, або false, тоді як T і F можуть мати будь-який тип.
Для перевірки наведіть курсор на trueCheck, falseCheck */

type TMyIf<C extends boolean, T, F> = C extends true ? T : F // Code here

const trueCheck: TMyIf<true, 'a', 'b'> = 'a' // очікується, що буде 'a'
const falseCheck: TMyIf<false, 'a', 'b'> = 'b' // очікується, що буде 'b'

export {
  trueCheck,
  falseCheck
}
