/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

import React, {Component} from 'react'
import {StyleSheet, ScrollView, Platform} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {VERSION} from '../../config'
import * as components from '../'
import * as actions from '../../actions'

class About extends Component {
  static navigationOptions = {
    title: '关于'
  }

  constructor (props) {
    super(props)

    this.screenId = props.screenId || 'About'
  }

  render () {
    let {account, checkAppUpdate} = this.props
    let {settings: {betaUser}} = account

    return (
      <components.Layout screenId={this.screenId}>
        <ScrollView>
          <components.Image
            source={require('Rapp/res/img/zqc-icon-middle.png')}
            style={styles.logo}
          />
          <components.Block containerStyle={{paddingVertical: 0}}>
            <components.BlockItem
              leftText='当前版本'
              rightText={VERSION}
              containerStyle={{borderTopWidth: 0}}
            />
            {Platform.OS === 'android' ? <components.BlockItem
              leftText='版本更新'
              rightText='立即检查'
              rightIcon='keyboard-arrow-right'
              onPress={() => checkAppUpdate({betaUser, silent: false})}
            /> : null
            }
          </components.Block>
          <components.TextNotice>
            Copyright © RunRun Rapp https://github.com/wangshuaifeng/Rapp.git All Rights Reserved.
          </components.TextNotice>
        </ScrollView>
      </components.Layout>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginVertical: 50,
    width: 100,
    height: 100,
    borderRadius: 10
  }
})

function mapStateToProps (state) {
  let {account} = state
  return {
    account
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
