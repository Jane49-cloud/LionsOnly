import React from 'react'

import {StyleSheet} from 'react-native'
import AppText from './AppText'
import propTypes from 'prop-types'
import GlobalStyles from '../GlobalStyles'

export default function SmallText(
    style,
    children
) {
  return (
   <AppText style={[styles.text, style]}>
    {children}
  
   </AppText>
  )
}

SmallText.propTypes ={
    style:propTypes.object,
    children:propTypes.node
}

const styles= StyleSheet.create({
    text:{
        fontSize:GlobalStyles.SCREEN_SIZE * 0.04
    }
})