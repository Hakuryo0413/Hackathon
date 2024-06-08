import { StatusBar, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, Image } from "react-native";
import CusButton from "../components/CusButton";
import PhoneInput from "react-native-phone-number-input";
import React, { useState, useRef } from "react";
import { Keyboard } from "react-native";
import { images } from "../constants";

const Splash2 = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef<PhoneInput>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [valid, setValid] = useState(false);

  const goToSplash1 = () => {
    navigation.navigate("signin");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <Image
        source={images.splash2}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.text}>Explore the app</Text>
      {/* {showMessage && (
        <View style={styles.message}>
          <Text>Value : {value}</Text>
          <Text>Formatted Value : {formattedValue}</Text>
          <Text>Valid : {valid ? "true" : "false"}</Text>
        </View>
      )}
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="VN"
        layout="first"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        autoFocus
      /> */}
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const checkValid = phoneInput.current?.isValidNumber(value);
          setShowMessage(true);
          setValid(checkValid ? checkValid : false);
          Keyboard.dismiss(); // This will close the keyboard
        }}
      >
        <Text>Press Here</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.button}
        onPress={
          goToSplash1

          // This will close the keyboard
        }
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
          Sign up
        </Text>
      </TouchableOpacity>
      {/* <CusButton
        title="Sign up"
        handlePress={goToSplash1}
        containerStyles="w-2"
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
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
  message: {
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    backgroundColor: "#f9c2ff",
    borderRadius: 5,
  },
  image: {
    width: 360,
    height: 360,
    marginTop: -100,
  },

  text: {
    color: "black",
    fontSize: 32,
    lineHeight: 42,
    justifyContent: "center",
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "black",
  },
});
export default Splash2;
