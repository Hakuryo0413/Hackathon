import { StatusBar, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";
import Button from "../components/Button";
import PhoneInput from "react-native-phone-number-input";
import React, { useState, useRef } from "react";
import { Keyboard } from "react-native";

const Splash2 = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef<PhoneInput>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [valid, setValid] = useState(false);

  const goToSplash1 = () => {
    navigation.navigate("(tabs)");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      {showMessage && (
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
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const checkValid = phoneInput.current?.isValidNumber(value);
          setShowMessage(true);
          setValid(checkValid ? checkValid : false);
          Keyboard.dismiss(); // This will close the keyboard
        }}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
      <Button
        title="Sign up"
        handlePress={goToSplash1}
        containerStyles="mt-7"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  message: {
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    backgroundColor: "#f9c2ff",
    borderRadius: 5,
  },
});
export default Splash2;
