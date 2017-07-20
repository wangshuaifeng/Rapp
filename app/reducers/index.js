/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

import {combineReducers} from 'redux'
import app from './app'
import store from './store'
import persist from './persist'
import loading from './loading'
import processing from './processing'
import error from './error'
import input from './input'
import screen from './screen'
import location from './location'
import object from './object'
import network from './network'
import account from './account'
import user from './user'
import post from './post'
import player from './player'

export default combineReducers({
  app,
  store,
  persist,
  loading,
  processing,
  error,
  network,
  location,
  input,
  screen,
  object,
  account,
  user,
  post,
  player
})
