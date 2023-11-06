import { FontFamily, Color, FontSize } from "../../GlobalStyles";
import React , {  useEffect, useRef, useState }from "react";
import { Image,TextInput, Text, View,KeyboardAvoidingView,Button ,Platform, TouchableOpacity} from "react-native";
import {styles} from '../Styles/styles.js'
import { Otp } from "./Otp";
export const  Login=({})=>{
    let textInput=useRef(null)
    const [phoneNumber, SetPhoneNumber]=useState();
    const [focusInput, setFocusInput]=useState(true);
  const [showPasswordInput, setShowPasswordInput] = useState(false);


const onChangePhone=(number)=>{
    SetPhoneNumber(number)
}

const onPressGetotp=()=>{
    if (phoneNumber.length === 10) {
        setShowPasswordInput(true);
        // navigation.navigate("Otp");
      } else {
        alert('Please enter a valid 10-digit mobile number.');
      }
}
const onChangeFocus=()=>{
    setFocusInput(true)

}
const onChangeBlur=()=>{
    setFocusInput(false)
}
useEffect(()=>{
    textInput.focus()
})

return(

  
    <View style={styles.container}>
     <Image
     style={[styles.img]}
        resizeMode="cover"
    source={require("../../assets/images/logo.png")}

    />
   <Text style={[styles.loginToYourAccount, styles.text1Typo]}>
        Login to your account 
    </Text>
    <KeyboardAvoidingView
    keyboardVerticalOffset={50}
    behavior="height"
    style={styles.containerAvoidingView}
    >
  
    <View style={[styles.containerInput
    ,
    {
    }]}>
        <View style={styles.opendialogview}>
        <Image
     style={ styles.iconind}
        resizeMode="cover"
    source={require("../../assets/images/india.png")}/>
            <Text style={[styles.text, styles.textTypo]}>{"+91 "}</Text>
        </View>
        <TextInput
        ref={(input)=> (textInput=input)}
        style={styles.phoneInputStyles}
        placeholder="|  Your Mobile Number"
        placeholderTextColor="gray"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={onChangePhone}
        secureTextEntry={false}
        onFocus={onChangeFocus}
        onBlur={onChangeBlur}
        />
    </View>

    <TouchableOpacity


onPress={onPressGetotp}>
<View style={[
    styles.btngetotp
  
]}>
    <Text style={styles.textotp}>Get OTP</Text>
</View>

</TouchableOpacity>

<Image
     style={[styles.img1]}
        resizeMode="cover"
    source={require("../../assets/images/framebackground.png")}

    />
    </KeyboardAvoidingView>
    <View style={styles.viewBottom}>


</View>
    </View>
    );

};

