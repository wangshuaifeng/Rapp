/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

export function numberText (number) {
  if (number < 10000) {
    return number.toString()
  } else {
    return Math.round(number / 10000) + '万'
  }
}
