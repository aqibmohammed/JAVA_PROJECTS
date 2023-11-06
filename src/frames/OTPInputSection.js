import { Image,KeyboardAvoidingView, Pressable, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { Color } from '../../GlobalStyles';
import { styles } from '../Styles/styles';

export const OTPInputSection = ({ setPinReady, code, setCode, maxLength }) => {
  const codeDigitsArray = new Array(maxLength).fill(0);

  const textInputRef = useRef();

  // monitoring input focus
  const [inputContainerIsFocused, setinputContainerIsFocused] = useState(false);

  const handleOnPress = () => {
    setinputContainerIsFocused(true);
    textInputRef?.current?.focus();
  };

  const handleOnBlur = () => {
    setinputContainerIsFocused(true);
  };

  useEffect(() => {
    setPinReady(code.length === maxLength);
    return () => setPinReady(false);
  }, [code]);

  const toCodeDigitInput = (_value, index) => {
    const emptyInputChar = " ";
    const digit = code[index] || emptyInputChar;

    //formatting
    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maxLength - 1;
    const isCodeFull = code.length === maxLength;
    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    return (
      <View style={styles.otpinput} key={index}>
        <Text style={styles.otpinputtext}>
          {digit}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container1}>
    <View style={styles.txtgrp1}>
    <Text style={styles.txt1}>Verify Your mobile</Text>
    <Text style={styles.txt1}>Phone number</Text>
</View>
    <View style={styles.txtgrp2}>
    <Text style={styles.txt2}>Enter Your OTP code</Text>
    <Text style={styles.txt2}>here</Text>
</View>
      <KeyboardAvoidingView behavior="height" style={styles.keyboardAvoidingView}>
        <View style={styles.inputtextview}>
          <Pressable style={styles.pressable} onPress={handleOnPress}>
            {codeDigitsArray.map(toCodeDigitInput)}
          </Pressable>

          <TextInput
            style={styles.hiddentextinput}
            keyboardType="number-pad"
            value={code}
            onChangeText={setCode}
            maxLength={maxLength}
            ref={textInputRef}
            onBlur={handleOnBlur}
            returnKeyType='done'
            textContentType='oneTimeCode'
          />
        </View>
      
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.button}>
        <Text>Continue</Text>
      </TouchableOpacity>
      <View style={styles.txtgrp3}>
      <Text style={styles.txt3}>
        Didn't receive the code
      </Text>
      <Text style={styles.txt3}>
        yet?
      </Text>
      </View>
      <TouchableOpacity style={styles.resend}>
        <Text style={styles.txt4}>Resend Code</Text>
      </TouchableOpacity>
      <Image
     style={[styles.imgotp]}
        resizeMode="cover"
    source={require("../../assets/images/framebackground.png")}

    />
    </View>
  );
};

