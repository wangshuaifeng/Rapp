/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

const initialState = {
  rehydrated: false
}

export default (state = initialState, action) => {
  if (action.type === 'set_persist_rehydrated') {
    let {rehydrated} = action
    return {
      ...state,
      rehydrated
    }
  } else if (action.type === 'reset_persist') {
    return initialState
  } else {
    return state
  }
}
