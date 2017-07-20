/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

import React, {Component} from 'react'
import {Provider} from 'react-redux'

import store from './store'
import {AppNavigator} from './navigation'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
