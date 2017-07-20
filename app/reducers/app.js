/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

const initialState = {
  env: 'production'
}

export default (state = initialState, action) => {
  if (action.type === 'set_app_env') {
    let {env} = action
    return {
      ...state,
      env
    }
  } else if (action.type === 'reset' || action.type === 'reset_app') {
    return initialState
  } else {
    return state
  }
}
