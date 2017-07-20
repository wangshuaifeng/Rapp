/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

import React from 'react'
import {StyleSheet, View} from 'react-native'

import {COLOR} from '../../config'

export default ({children, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: COLOR.backgroundLighter,
    borderWidth: 1,
    borderColor: COLOR.lineNormal,
    borderRadius: 5
  }
})
