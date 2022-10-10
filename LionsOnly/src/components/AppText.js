import React from 'react'
import GlobalStyles from '../GlobalStyles'
import {Text} from 'react-native'
import PropTypes from 'prop-types'

const AppText =({
    children, 
    style
})=> {

  return (
   <Text styles = {[GlobalStyles.COMMON_STYLES.text, style]}>
    {children}
     hello
   </Text>
  )
}

AppText.PropTypes = {
  children: PropTypes.node,
  style : PropTypes.object,
}
export default  AppText