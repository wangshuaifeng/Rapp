/**
 * Rapp
 * runrun
 */
import {combineReducers} from 'redux';
import store from './store';
import network from './network';
import persist from './persist';
import error from './error';

export default combineReducers({
  store,
  network,
  persist,
  error,
});
