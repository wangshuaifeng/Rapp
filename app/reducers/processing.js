/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

const initialState = {
  task: ''
}

export default (state = initialState, action) => {
  if (action.type === 'processing_task') {
    let {task} = action
    return {
      ...state,
      task
    }
  } else if (action.type === 'reset' || action.type === 'reset_processing') {
    return initialState
  } else {
    return state
  }
}
