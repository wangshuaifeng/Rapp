/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

const initialState = {
  lastRefreshTime: {},

  RegisterVerify: {
    secondsToSend: 0
  },
  ResetPassword: {
    secondsToSend: 0
  },
  RegisterProfile: {
    showProfileGender: false
  },

  Nearby: {
    refreshing: false,
    showCityAndSport: false
  },
  AtCourt: {
    refreshing: false
  },
  Me: {
    refreshing: false
  },

  EditProfile: {
    showProfileGender: false
  },
  EditProfileEmail: {
    secondsToSend: 0
  },

  Album: {
    files: []
  }
}

export default (state = initialState, action) => {
  if (action.type === 'set_screen_state') {
    let {screenId, screenState} = action
    return {
      ...state,
      [screenId]: Object.assign({}, state[screenId], screenState)
    }
  } else if (action.type === 'set_screen_last_refresh_time') {
    let {screenId, lastRefreshTime, objectId} = action
    let screenLastRefreshTime = state.lastRefreshTime[screenId] || {}
    screenLastRefreshTime = Object.assign({}, screenLastRefreshTime,
      {[objectId]: lastRefreshTime})
    return {
      ...state,
      lastRefreshTime: Object.assign({}, state.lastRefreshTime,
        {[screenId]: screenLastRefreshTime})
    }
  } else if (action.type === 'reset_screen_state') {
    let {screenId} = action
    if (screenId === undefined) {
      return initialState
    } else {
      return {
        ...state,
        [screenId]: initialState[screenId]
      }
    }
  } else if (action.type === 'reset_screen_last_refresh_time') {
    return {
      ...state,
      lastRefreshTime: initialState.lastRefreshTime
    }
  } else if (action.type === 'reset') {
    return initialState
  } else {
    return state
  }
}
