import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from "react-native";
import Google from "../../assets/icons/google";
import Facebook from "../../assets/icons/facebook";
import { useNavigation } from "@react-navigation/native";

// import Invisible from '../../../asset/icons/invisible';
// import Email from '../../../asset/icons/email';
// import {images, fontSizes} from '../../../constants';
// import styles from './style';
// import {isValidEmail, isValidPassword} from '../../utilies/Validations';

import axios from "axios";
import { images } from "../constants";

function Login({}) {
  const navigation = useNavigation();

  const [KeyboardIsShow, setKeyboardIsShow] = useState(false);
  // Validate email/password
  const [textErrorEmail, setTextErrorEmail] = useState("");
  const [textErrorPassword, setTextErrorPassword] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const goToTabs = () => {
    navigation.navigate("(tabs)");
  };
  const isValidationOK = () => email.length >= 0 && password.length >= 0;
  // &&
  // isValidEmail(email) == true &&
  // isValidPassword(password) == true
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardIsShow(false);
    });
  });
  const [accountTypes, setAccountTypes] = useState([
    {
      name: "Sign in ",
      isSelected: "false",
    },
  ]);
  const handlerToLogin = async () => {
    const userdata = {
      email: email,
      password: password,
    };
    const res = await axios.post(`http://10.0.2.2:4848/me/logintest`, userdata);
    const data = res.data;
    // console.log(data);
    console.log("Acount has been created");
    // if (data.message === '200') {
    //   navigation.navigate('Navbar', {
    //     data: data,
    //   });
    // }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.top}>
        <Text style={styles.text1}>Log in</Text>
        {/* <Text style={styles.text2}>A handful of model sentence structures</Text> */}
      </View>

      <View style={styles.mid}>
        <View>
          <Text style={{ color: "black" }}>Email address</Text>

          <TextInput
            style={styles.inputButton}
            // autoFocus={true}
            placeholder="Email address"
            // paddingLeft={52}
            placeholderTextColor="black"
            // onChangeText={text => {
            //   setTextErrorEmail(
            //     isValidEmail(text) == true ? '' : 'Please enter valid email',
            //   );
            //   setEmail(text);
            // }}
          />
          {/* <Email width="24" height="24" style={styles.icons}></Email> */}
        </View>
        <Text
          style={{
            color: "red",
            fontSize: 12,
            marginLeft: 0,
            // marginBottom: 10,
          }}
        >
          {textErrorEmail}
        </Text>

        <View>
          <Text style={{ color: "black" }}>Password</Text>

          <TextInput
            style={styles.inputButton}
            secureTextEntry={true}
            // paddingLeft={50}
            placeholder="Password"
            placeholderTextColor="black"
            // onChangeText={text => {
            //   setTextErrorPassword(
            //     isValidPassword(text) == true
            //       ? ''
            //       : 'Password must be at least 6 characters',
            //   );
            //   setPassword(text);
            // }}
          />
          {/* <Invisible width="24" height="24" style={styles.icons}></Invisible> */}
        </View>
        <Text
          style={{
            color: "red",
            fontSize: 12,
            marginLeft: 0,
            // marginBottom: 10,
          }}
        >
          {textErrorPassword}
        </Text>

        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Forgot1');
          }}
        >
          <Text
            style={{
              color: "#5297fe",
              textDecorationLine: "underline",
              marginLeft: 210,
              marginVertical: 10,
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={goToTabs}
        >
          <Text
            style={{
              color: "white",
              // justifyContent: "center",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Log in
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.buttonSignIn}
          disabled={isValidationOK() == false}
          onPress={handlerToLogin}
        >
          <Text
            style={{
              color: "white",
              // fontSize: fontSizes.h1,
              textAlign: "center",
              textAlignVertical: "center",
              fontWeight: 600,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity> */}
      </View>

      {KeyboardIsShow == false && (
        <View style={styles.below}>
          <Text style={styles.text3}>Or Login with</Text>
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <View
              style={{
                width: 160,
                backgroundColor: "white",
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                margin: 10,
              }}
            >
              <Google width="24" height="24" style={styles.icon}></Google>
            </View>
            <View
              style={{
                width: 160,
                backgroundColor: "white",
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                margin: 10,
              }}
            >
              <Facebook width="24" height="24" style={styles.icon}></Facebook>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              padding: 20,
            }}
          >
            <Text style={{ color: "black" }}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('Register1');
              }}
            >
              <Text
                style={{
                  color: "#5297fe",
                  textDecorationLine: "underline",
                }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    justifyContent: "center",
    backgroundColor: "#e4f1f9",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2EB5FA",
    padding: 10,
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15,
    height: 50,
    width: "80%",
  },
  top: {
    flex: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  mid: {
    flex: 40,
    alignItems: "center",
  },
  below: {
    flex: 40,
  },
  inputButton: {
    marginTop: 10,
    padding: 10,
    width: 340,
    height: 60,
    backgroundColor: "white",
    fontFamily: "Poppins-Regular",
    borderRadius: 10 /* bo tròn góc */,
    borderWidth: 1 /* độ dày đường viền */,
  },

  buttonSignIn: {
    // ...Button,
    marginVertical: 8,
    backgroundColor: "#3787ff",
  },
  text1: {
    // ...TEXT,
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "Poppins-Medium",
    marginTop: 10,
  },
  text2: {
    // ...TEXT,
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#383838",
    marginTop: 12,
  },
  text3: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 16,
    color: "black",
    fontFamily: "Poppins-Medium",
  },
  icon: {
    // position: "absolute",
    // marginLeft: 20, // marginLeft: 90,
  },
  icons: {
    position: "absolute",
    marginTop: 26,
    marginLeft: 20,
  },
});
export default Login;
