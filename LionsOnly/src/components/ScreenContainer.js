import React from 'react'
import {View,StatusBar}from 'react-native' 
import GlobalStyles from '../GlobalStyles'
import propTypes from 'prop-types'


 const ScreenContainer=({
style,
children
}) =>{
  return (
    <View style={[GlobalStyles.COMMON_STYLES.ScreenContainer, GlobalStyles.COMMON_STYLES.ScrollViewContainers, style]}>

<StatusBar barStyle={'light-content'} backgroundColor ={GlobalStyles.COLORS.backgroundColor}/>

{children
}
    </View>
  )
}
ScreenContainer.propTypes ={
    style:propTypes.object,
    children:propTypes.node
}



export default ScreenContainer