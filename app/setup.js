/**
 * Rapp
 * runrun
 */
import {AppRegistry, NetInfo, Platform} from 'react-native';

import logger from './logger';
import store, {persistStore} from './redux/store/store';
import App from './App';
import * as actions from './redux/actions';

persistStore(
  store,
  state => {
    store.dispatch(actions.setPersistRehydrated(true));
    logger.debug('load state ok');

    if (Platform.OS !== 'ios') {
      NetInfo.isConnected.fetch().then(isConnected =>
        store.dispatch(actions.setNetwork({isConnected}))
      );
      NetInfo.fetch().then(reach => {
        reach = (reach === 'cell' ||
          reach.startsWith('MOBILE')) ? 'mobile' : 'wifi';
        store.dispatch(actions.setNetwork({reach}));
      });
    }
    NetInfo.isConnected.addEventListener(
      'change',
      isConnected => {
        let {network} = store.getState();
        store.dispatch(actions.setNetwork({isConnected}));
        if (network.isConnected !== undefined) {
          store.dispatch(actions.errorFlash(
            isConnected === true ? '网络已恢复。' : '网络不可用。'));
        }
      }
    );
    NetInfo.addEventListener(
      'change',
      reach => {
        reach = (reach === 'cell' ||
          reach.startsWith('MOBILE')) ? 'mobile' : 'wifi';
        let {network} = store.getState();
        store.dispatch(actions.setNetwork({reach}));
        if (network.reach !== undefined) {
          actions.errorFlash(
            reach === 'mobile' ? '当前为移动网络。' : '当前为WIFI网络。');
        }
      }
    );
    logger.debug('listen network ok');
  },
  error => {
    logger.warn('load state fail', error);
    store.dispatch(actions.setPersistRehydrated(true));
  }
);

AppRegistry.registerComponent('Rapp', () => App);
