/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

import {getApi} from './'

export function lbsRegeo (location) {
  let {longitude, latitude} = location
  return getApi('/lbs/regeo', {
    location: `${longitude},${latitude}`
  })
};
