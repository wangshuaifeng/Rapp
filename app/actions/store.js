/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

export function reset () {
  return {
    type: 'reset'
  };
}

export function resetStore () {
  return {
    type: 'reset_store'
  };
}

export function setStoreVersion (version) {
  return {
    type: 'set_store_version',
    version
  };
}
