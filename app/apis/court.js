/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

import {getApi} from './'

export function courtInfo (id) {
  return getApi('/court/info', {id})
}

export function courtInfos (ids) {
  return getApi('/court/infos', {ids: ids.join(',')})
}
