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
import posts from "./data/PostData";

type Post = {
  id: number;
  image: string;
  content: string;
  author: string;
  time: string;
};
type Props = {
  updatePosts: Post[];
};

export default function ModalScreen({ updatePosts }: Props) {
  const [post, setPosts] = useState<Post[]>(posts);

  const [KeyboardIsShow, setKeyboardIsShow] = useState(false);
  const navigation = useNavigation();
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

    posts.push(newPost);

    navigation.navigate("home");
  };

  useEffect(() => {
    setPosts(post);
  }, post);

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
          placeholderTextColor="black"
          onChangeText={(text) => onChangeText(text)}
        />

        <Photo />
      </View>
      <View style={styles.below}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
