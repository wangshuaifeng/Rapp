/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

export function resetPersist () {
  return {
    type: 'reset_persist'
  }
}

export function setPersistRehydrated (rehydrated) {
  return {
    type: 'set_persist_rehydrated',
    rehydrated
  }
}
