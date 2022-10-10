import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import GlobalStyles from './src/GlobalStyles'
import GlobalImages from './src/GlobalImages';
import ScreenContainer from './src/components/ScreenContainer';
import SmallText from './src/components/SmallText';


export default function App() {
  return (
    <ScreenContainer>

    </ScreenContainer>
  );
}



const styles = StyleSheet.create({
  container:{
    alignContent:'center',
  },
  logo:{
    height:GlobalStyles.SCREEN_SIZE.width * 0.80,
    width:GlobalStyles.SCREEN_SIZE.width * 0.70,
    marginTop:GlobalStyles.SCREEN_SIZE.width * 0.1,
    marginBottom:GlobalStyles.SCREEN_SIZE.width * 0.70,
  },
  textInputContainer:{
height: GlobalStyles.SCREEN_SIZE.width * 0.12,
width: "100%",
justifyContent:'space-between',
marginBottom:20,
  },
  TextInputItem:{
    alignItems: 'flex-end',
    flexDirection:'row',
    height:'100%',
    width:"100%",
    borderBottomColor: GlobalStyles.COLORS.secondary,

  },
  textInput:{
    width:"100%",
    marginBottom:GlobalStyles.SCREEN_SIZE.width * 0.25,

  },
  iconContainer:{
width:'13%',
alignItems:'flex-end',
padding: GlobalStyles.SCREEN_SIZE.width * 0.25,
  },
  inputIcon:{
    marginBottom:GlobalStyles.SCREEN_SIZE.width * 0.25,
  }

})
