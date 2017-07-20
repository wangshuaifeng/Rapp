/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

import * as apis from '../apis'
import * as actions from './'

export function resetUser () {
  return {
    type: 'reset_user'
  }
}

export function userInfo ({userId, cbOk, cbFail, cbFinish}) {
  return dispatch => {
    dispatch(actions.cacheUserByIds({userIds: [userId], update: true}))
      .then(users => {
        if (cbFinish) {
          cbFinish()
        }
        if (cbOk) {
          cbOk(users)
        }
      })
      .catch(error => {
        if (cbFinish) {
          cbFinish()
        }
        if (cbFail) {
          cbFail(error)
        } else {
          dispatch(actions.handleError(error))
        }
      })
  }
}

export function nearbyUsers ({cbOk, cbFail, cbFinish} = {}) {
  return (dispatch, getState) => {
    let {location: {position}} = getState()
    if (!position) {
      if (cbFinish) {
        cbFinish()
      }
      dispatch(actions.errorFlash('无法获取当前位置。'))
      return
    }

    let {coords: location} = position
    apis.nearbyUsers({location})
      .then(response => {
        let {data: {users}} = response
        return dispatch(actions.cacheUsers({users}))
      })
      .then(users => {
        if (cbFinish) {
          cbFinish()
        }
        let userIds = users.map(v => v.id)
        dispatch({type: 'set_nearby_users', userIds})
        if (cbOk) {
          cbOk(users)
        }
      })
      .catch(error => {
        if (cbFinish) {
          cbFinish()
        }
        if (cbFail) {
          cbFail(error)
        } else {
          dispatch(actions.handleError(error))
        }
      })
  }
}
