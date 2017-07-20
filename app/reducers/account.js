/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

const initialState = {
  id: undefined,
  settings: {
    'betaUser': false,
    'city': {
      'name': '全国',
      'code': ''
    },
    'sport': {
      'name': '网球',
      'code': 'tennis'
    },
    'storage': {
      'quota': 1073741824,
      'usedAmountMonth': 0
    },
    'video': {
      'autoPlay': {
        'wifi': true,
        'mobile': true
      },
      'playRate': {
        'wifi': 'hd',
        'mobile': 'ld'
      },
      'uploadRate': {
        'wifi': 'fhd',
        'mobile': 'hd'
      }
    }
  }
}

export default (state = initialState, action) => {
  if (action.type === 'set_account_user') {
    let {id} = action
    return {
      ...state,
      id
    }
  } else if (action.type === 'set_account_settings') {
    let {settings} = action
    return {
      ...state,
      settings
    }
  } else if (action.type === 'reset' || action.type === 'reset_account') {
    return initialState
  } else {
    return state
  }
}
