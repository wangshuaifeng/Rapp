/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

export function resetApp () {
  return {
    type: 'reset_app'
  }
}

export function setAppEnv (env) {
  return {
    type: 'set_app_env',
    env
  }
}
