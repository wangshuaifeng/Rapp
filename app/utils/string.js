/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

export function lpad (str, len, pad = ' ') {
  str = str + ''
  while (str.length < len) {
    str = pad + str
  }
  return str
}
