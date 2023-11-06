// import { FontFamily, Color, FontSize } from "./GlobalStyles";
import {StyleSheet} from 'react-native';

export const FontFamily = {
    interRegular: "Inter-Regular",
  };
  /* font sizes */
  export const FontSize = {
    size_mini: 15,
    size_base: 16,
    size_smi: 13,
  };
  /* Colors */
  export const Color = {
    colorWhite: "#fff",
    colorGray: "#888",
    colorDimgray: "#6f6f6f",
    colorBlack:"#000",
    colorprimary:"#FF9300",
  };
  export const styles=StyleSheet.create({

        // CSS FOR FIRST_SCREEN
    login: {
        flex: 1,
        height: 800,
        overflow: "hidden",
        width: "100%",
      },
    container:{
    backgroundColor: 'white', // Change this to your desired background color

        flex:1,
        alignItems:"center",
        justifyContent:"center"

       
    },
    //css for logo
    img:{
        top:70,
        right:10,
       position:'relative',
        width:200,
        height:70,
       
    },
        
       
  
    


      //css for Login to your account text
      loginToYourAccount: {
        top: 150,
        right: "25.28%",
        fontSize: FontSize.size_xl,
        color:'#000',
        textAlign: "left",
        fontFamily: FontFamily.interRegular,
      },
      text1Typo: {
        textAlign: "left",
        fontFamily: FontFamily.interRegular,
        position: "relative",
      },
    containerAvoidingView:{
        flex:1,
        alignItems:'center',
        padding:5,
    },

// for input text
    containerInput:{
        flexDirection:'row',
        marginLeft:20,
        paddingHorizontal:12,
        borderRadius: 10,
        width:300,
        right:10,
        top:180,
        backgroundColor: '#fafafa' ,
        borderColor:'#dcdcdc',
        borderWidth:0.5,
        alignItems:'center',
    },
    opendialogview:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
       
    },
    iconind:{
        flexDirection:'row',
        width:20,
        height:20,
        top:0,
        right:0,

    },
    text: {
        // top:'100%',
        // left: "10.74%",
        color: Color.colorBlack,
    },
    textTypo: {
        fontSize: FontSize.size_smi,
        // top: "100.86%",
        left:25,
        textAlign: "left",
        fontFamily: FontFamily.interRegular,
        position: "absolute",
      },
      phoneInputStyles:{
        color:Color.colorBlack,
        marginLeft: 40,
        flex:1,
        height:40,
      },

      //button
      viewBottom:{
        flex:1,
        justifyContent:'center',
        marginBottom:50,
        alignContent:'center'
      },
      btngetotp:{
        top:200,
        position:'relative',
        width: 300,
        height: 40,
        right:5,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#FF9300"
      },
      textotp:{
        color:'#ffffff',
         alignItems:'center'
      },

      img1:{
        top:300,
            width:239,
            height:159,
      },

      // SECOND_SCREEN CSS

      txtgrp1:{
        width:214,
        height:60,
        alignItems:'center',
        bottom:15,
    },
    txt1:{
        color:Color.colorBlack,
        fontSize:20,
    },
   
    txtgrp2:{
        alignItems:'center',

    },
    txt2:{
color:Color.colorDimgray
    },
    





   
  hiddentextinput: {
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
  inputtextview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  pressable: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpinput: {
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
  otpinputtext: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Color.colorGray,
  },
  container1: {
    backgroundColor: 'white', // Change this to your desired background color

    top:80,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width:288,
    height:42,
    borderRadius:10,
    backgroundColor: Color.colorprimary,
    alignItems: 'center',
    padding: 10,
    bottom:80,
    margin: 10,

  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: 18,
  },
  txtgrp3:{
    alignItems:'center',
    bottom:70,
  },
  txt3:{
    color:Color.colorDimgray
  },
 
  resend:{
    width:105,
    height:37,
    borderRadius:10,
    color:Color.colorprimary,
    backgroundColor: Color.colorWhite,
    alignItems: 'center',
    padding: 10,
    bottom:80,
    margin: 10,
  },
  txt4:{
    color:Color.colorprimary,
    textDecorationLine: 'underline',

  }, 
  imgotp:{
    bottom:50,
 width:239,
 height:159,
  },


})

  
  
  
  
  
  
  







