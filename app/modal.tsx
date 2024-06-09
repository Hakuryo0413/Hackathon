import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import React, { useEffect, useState } from "react";
import { Photo } from "./components";
import { AntDesign } from "@expo/vector-icons";

export default function ModalScreen() {
  const [KeyboardIsShow, setKeyboardIsShow] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardIsShow(false);
    });
  });
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>New Post</Text>
      </View>
      <View style={styles.mid}>
        <View>
          <View
            style={{
              flexDirection: "row",
              // alignContent: "center",
              padding: 8,
              // backgroundColor: "pink",
            }}
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbTQRrYgXgiE6Icbs3Gzdq5T8CEQ1lhQXug&s",
              }}
              style={{ width: 40, height: 40, marginRight: 8 }}
            />
            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                alignSelf: "center",
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Username
            </Text>
            <TouchableOpacity
              style={{
                marginLeft: 220,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => Keyboard.dismiss()}
            >
              <AntDesign name="camera" size={24} color={"black"} />
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          style={styles.inputButton}
          // autoFocus={true}
          placeholder="Share something..."
          multiline={true}
          // numberOfLines={5}
          // paddingLeft={52}
          placeholderTextColor="black"

          // onChangeText={text => {
          //   setTextErrorEmail(
          //     isValidEmail(text) == true ? '' : 'Please enter valid email',
          //   );
          //   setEmail(text);
          // }}
        />

        <Photo />
      </View>
      <View style={styles.below}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("home")}
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
            Post
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style={Platform.OS === "ios" ? "dark" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  top: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  mid: {
    flex: 0.65,
    marginHorizontal: 20,
    // alignItems: "center",
  },
  below: {
    flex: 0.2,
  },
  input: {
    height: 200,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  inputButton: {
    marginTop: 10,
    padding: 10,
    // width: 340,
    height: 150,
    backgroundColor: "white",
    fontFamily: "Poppins-Regular",
    borderRadius: 10 /* bo tròn góc */,
    borderWidth: 0.5 /* độ dày đường viền */,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2EB5FA",
    padding: 10,
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15,
    height: 50,
    marginHorizontal: 120,
  },
});
