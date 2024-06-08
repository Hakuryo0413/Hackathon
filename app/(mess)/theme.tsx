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
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={{ fontSize: 36, color: "black", fontWeight: "bold" }}>
          Select a Specialty
        </Text>
        <Text style={{ fontSize: 14, color: "black", fontStyle: "italic" }}>
          Choose one of the following specialties for your chat
        </Text>
      </View>
      <View style={styles.middle}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {
            handleMouseEnter();
            navigation.navigate("(chats)");
          }}
        >
          <Text
            style={[
              {
                color: "#525F7F",
                // justifyContent: "center",
                textAlign: "center",
                fontSize: 18,
                fontWeight: 600,
              },
            ]}
          >
            Quấy rối tình dục
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("(chats)")}
        >
          <Text
            style={{
              color: "#525F7F",
              // justifyContent: "center",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Bạo lực gia đình
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("(chats)")}
        >
          <Text
            style={{
              color: "#525F7F",
              // justifyContent: "center",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Phân biệt đối xử trong công việc
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("(chats)")}
        >
          <Text
            style={{
              color: "#525F7F",
              // justifyContent: "center",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Bình đẳng giới trong giáo dục
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("(chats)")}
        >
          <Text
            style={{
              color: "#525F7F",
              // justifyContent: "center",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Bất bình đẳng trong tham gia
          </Text>
          <Text
            style={{
              color: "#525F7F",
              // justifyContent: "center",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            chính trị và xã hội
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <Text
          style={{
            color: "#98A3C7",
            // justifyContent: "center",
            textAlign: "center",
            marginTop: 40,
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          By using it you confirm that you have read and agree to our terms of
          service and privacy policy
        </Text>
      </View>
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
    flex: 0.1,
    backgroundColor: "#F3F4F5",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  middle: {
    flex: 0.7,
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
    backgroundColor: "#E3E5ED",
    padding: 10,
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15,
    height: 90,
    marginHorizontal: 10,
  },
  hoveredButton: {
    backgroundColor: "#2EB5FA", // change this to the color you want when hovered
  },
});
