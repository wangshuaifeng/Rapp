/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

export function resetPlayerState () {
  return {
    type: 'reset_player_state'
  }
}

export function setPlayerState (state) {
  return {
    type: 'set_player_state',
    ...state
  }
}
