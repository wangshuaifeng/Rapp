/**
 * RunRun Rapp
 * https://github.com/wangshuaifeng/Rapp.git
 */

import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

import {COLOR} from '../../config'
import * as components from '../'

export default ({title, moreText, moreOnPress, children, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
        {moreText
          ? <components.Text onPress={moreOnPress} style={styles.titleText}>
            {moreText}
          </components.Text>
          : null}
      </View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleText: {
    fontSize: 12,
    color: COLOR.textNormal
  }
})
