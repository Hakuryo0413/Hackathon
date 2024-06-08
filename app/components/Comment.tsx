import React, { useState } from "react";
import {
  // Button,
  Image,
  TextInput,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { CusButton } from "../components";
import Icon from "react-native-vector-icons/FontAwesome";
import { images } from "../constants";
import { Ionicons } from "@expo/vector-icons";
const Comment = () => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    // Here you would typically send the text to your backend server
    console.log(text);
    setText("");
  };

  return (
    <View
      style={{
        justifyContent: "center",
        marginVertical: 10,
        flexDirection: "column",
        // marginHorizontal: 20,
        height: 100,
        borderRadius: 10,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 4,
          marginRight: 20,
          marginHorizontal: 10,
        }}
      >
        <Ionicons name="star" size={18} color="#ff9d42" />
        <Ionicons name="star" size={18} color="#ff9d42" />
        <Ionicons name="star" size={18} color="#ff9d42" />
        <Ionicons name="star" size={18} color="#ff9d42" />
        <Ionicons name="star" size={18} color="#ff9d42" />
      </View>
      <Text
        style={{
          fontFamily: "Poppins-Medium",
          fontSize: 14,
          marginHorizontal: 10,
        }}
      >
        Both of our sons have completed your course, the results are excellent!
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: 16,
          paddingRight: 12,
          marginHorizontal: 10,
        }}
      >
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbTQRrYgXgiE6Icbs3Gzdq5T8CEQ1lhQXug&s",
          }}
          resizeMode="cover"
          style={{
            width: Platform.OS === "ios" ? 24 : 24,
            height: Platform.OS === "ios" ? 24 : 24,
            borderRadius: 32,
          }}
        ></Image>
        <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
          Sophia.A
        </Text>
      </View>
    </View>
  );
};

export default Comment;
const styles = StyleSheet.create({
  image: {
    // flex: 1,
    width: 100,
    height: 50,
    // justifyContent: "center",
  },
});
