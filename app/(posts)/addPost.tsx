import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
export default function CreatePostScreen() {
  const [text, setText] = useState("");
  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");

  const handleSubmit = () => {
    // Xử lý logic khi nhấn nút đăng bài ở đây
    console.log("Content:", text);
    // Reset ô nhập liệu sau khi đăng bài
  };

  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <View
          style={{
            backgroundColor: value,
            borderBottomColor: "#000000",
            borderBottomWidth: 1,
          }}
        >
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            style={{ padding: 10 }}
          />
        </View>
        <Button title="Post" onPress={handleSubmit} />
        {/* <Photo /> */}
      </View>
    </SafeAreaView>
  );
}
