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
import posts from "../data/PostData";

// import TextArea from "antd/es/input/TextArea";
export default function CreatePostScreen() {
  const [text, setText] = useState("");
  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");
  const [currentPosts, setCurrentPosts] = useState(posts); // Khởi tạo mảng posts ban đầu

  const handleSubmit = () => {
    const newPost = {
      id: currentPosts.length + 1, // Tạo id cho bài đăng mới
      image:
        "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/164458/Originals/bao-luc-hoc-duong-la-gi-1.jpg", // Điền đường link hình ảnh nếu có
      content: text,
      author: "Người tham gia ẩn danh", // Đổi thông tin tác giả nếu cần
      time: new Date().toLocaleString(), // Lấy thời gian hiện tại
    };

    const updatedPosts = [...currentPosts, newPost]; // Thêm bài đăng mới vào mảng posts

    setCurrentPosts(updatedPosts); // Cập nhật mảng posts mới

    setText(""); // Reset nội dung ô nhập liệu

    console.log("New Post:", newPost);
    console.log("All Posts:", updatedPosts);
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
        <Photo />
      </View>
    </SafeAreaView>
  );
}
