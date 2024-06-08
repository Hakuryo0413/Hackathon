import {
  StyleSheet,
  Image,
  ImageSourcePropType,
  Platform,
  Linking,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { CustomButton } from "../components";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";

export default function CallScreen() {
  const makePhoneCall = () => {
    if (Platform.OS === "android") {
      Linking.openURL("tel: 0911138586");
    } else {
      Linking.openURL("telprompt: 0911138586");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => makePhoneCall()}>
        <Text>Click here to make a phone call</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 500, // or any other size
    height: 500, // or any other size
    borderRadius: 10, // to make the image corners rounded
    marginTop: 20, // or any other size
  },
});
