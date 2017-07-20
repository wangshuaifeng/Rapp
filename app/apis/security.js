/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

import {getApi} from './'

export async function sendVerifyCode ({by, mobile, email}) {
  return getApi('/security/sendVerifyCode', {by, mobile, email})
}
