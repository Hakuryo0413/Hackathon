import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import {
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { Photo } from "../components";
const { TextArea } = Input;

// import TextArea from "antd/es/input/TextArea";
export default function ThemeScreen() {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");

  const handleSubmit = () => {
    // Xử lý logic khi nhấn nút đăng bài ở đây
    console.log("Content:", text);
    // Reset ô nhập liệu sau khi đăng bài
    setText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={{ fontSize: 36, color: "black", fontWeight: "bold" }}>
          Select a Specialty
        </Text>
        <Text style={{ fontSize: 14, color: "black" }}>
          Choose one of the following specialties for your chat
        </Text>
      </View>
      <View style={styles.middle}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("quiz")}
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
            Start Quiz
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("quiz")}
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
            Start Quiz
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("quiz")}
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
            Start Quiz
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("quiz")}
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
            Start Quiz
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("quiz")}
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
            Start Quiz
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  top: {
    flex: 0.3,
    backgroundColor: "#F3F4F5",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  middle: {
    flex: 0.6,
    backgroundColor: "#F3F4F5",
    marginHorizontal: 20,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 20,
  },
  bottom: {
    flex: 0.1,
    backgroundColor: "#F3F4F5",
    marginHorizontal: 20,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2EB5FA",
    padding: 10,
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15,
    height: 50,
    marginHorizontal: 10,
  },
});
