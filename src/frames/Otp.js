import { Pressable,Keyboard,StyleSheet,TextInput,View, Text } from 'react-native'
import React,{useState} from 'react'
import { Color } from '../../GlobalStyles'
import { OTPInputSection } from './OTPInputSection'


export const Otp= () => {
    const [code,setCode]=useState("");
    const [pinReady,setPinReady]=useState(false);
    const MAX_CODE_LENGTH=4
  return (
    
    <View >
    <OTPInputSection
    setPinReady={setPinReady}
    code={code}
    setCode={setCode}
    maxLength={MAX_CODE_LENGTH}
/>
</View>

  
  )
}
const styles=StyleSheet.create({
  hiddentextinput:{
      borderRadius:2,
      borderWidth:2,
      borderColor:"#dcdcdc",
      width:300,
      left:20,
      bottom:60,
      opacity:0,
      // width:1,
      // height:1,
      // opacity:0,
      
      color:Color.colorBlack,

  },
  inputtextview:{
      justifyContent:'center',
      alignItems:'center',
      marginVertical:30,
  }
  ,
  pressable:{
      width:'70%',
      flexDirection:'row',
      justifyContent:'center',
  },
  otpinput:{
      backgroundColor:'#FAFAFA',

      borderColor:'#dcdcdc',
      minWidth:"18 %",
      // width:50,
      // height:50,
      borderWidth:1,
      marginRight:12,
      left:5,
      bottom:10,
      borderRadius:10,
      padding:12,
  },
  otpinputtext:{
      fontSize:22,
      fontWeight:'bold',
      textAlign:'center',
      color:Color.colorGray,
  },
  container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"

     
  },



})