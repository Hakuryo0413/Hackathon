import React, { useState } from "react";
import {
  Button,
  Image,
  TextInput,
  View,
  Text,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const Post = () => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    // Here you would typically send the text to your backend server
    console.log(text);
    setText("");
  };

  return (
    <SafeAreaView
      style={{
        marginVertical: 8,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          padding: 8,
          //   backgroundColor: "pink",
        }}
      >
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbTQRrYgXgiE6Icbs3Gzdq5T8CEQ1lhQXug&s",
          }}
          style={{ width: 40, height: 40, marginRight: 8 }}
        />
        <View>
          <Text
            style={{
              justifyContent: "center",
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Username
          </Text>
          <Text
            style={{
              justifyContent: "center",
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            24 minutes ago
          </Text>
        </View>
      </View>
      <View
        style={{ width: Dimensions.get("window").width * 0.94, padding: 8 }}
      >
        <Text>
          Một nghiên cứu mới cho thấy mức độ bạo lực giới vẫn cao, đặc biệt là
          trong vấn đề ấu dâm, với 50% trường hợp ghi nhận. Sự lan rộng của hiện
          tượng này đòi hỏi sự can thiệp quyết liệt từ cộng đồng và chính phủ để
          bảo vệ quyền lợi của mọi người.
        </Text>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIA-xluhG8Tu0mS0yQIUejkEZNHS4oM8cliQ&s",
          }}
          style={{ width: "100%", height: 200, borderRadius: 10 }}
        />
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Icon name="heart-o" size={24} color="#000" style={{ padding: 8 }} />
          <Icon
            name="comment-o"
            size={24}
            color="#000"
            style={{ padding: 8 }}
          />
          <Icon name="send-o" size={24} color="#000" style={{ padding: 8 }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Post;
