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
} from "react-native";
import { CusButton } from "../components";
import Icon from "react-native-vector-icons/FontAwesome";
import { images } from "../constants";
const Post = ({ post }: { post: any }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    // Here you would typically send the text to your backend server
    console.log(text);
    setText("");
  };

  return (
    <SafeAreaView
      style={{
        // marginVertical: 8,
        // backgroundColor: "gray",
        // marginHorizontal: 20,
        // paddingHorizontal: 20,
        marginTop: 20,
        // borderColor: "gray",
        // borderWidth: 1,
        borderRadius: 16,
      }}
    >
      <View style={{ marginHorizontal: 20 }}>
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
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              {post.author}
            </Text>
            <Text
              style={{
                // justifyContent: "center",
                // textAlign: "center",
                // alignSelf: "center",
                fontSize: 12,
                color: "#1573FE",
              }}
            >
              {post.time}
            </Text>
          </View>
          {/* <Button></Button> */}
          <TouchableOpacity
            style={{
              backgroundColor: "#1573FE",
              width: 80,
              height: 32,
              borderRadius: 10,
              justifyContent: "center",
              marginLeft: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              Follow
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: Dimensions.get("window").width * 0.97, padding: 8 }}
        >
          <Text>{post.content}</Text>
          <Image
            source={{
              uri: post.image,
            }}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 10,
              marginTop: 10,
            }}
          />
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <Icon
              name="heart-o"
              size={24}
              color="#000"
              style={{ padding: 8 }}
            />
            <Icon
              name="comment-o"
              size={24}
              color="#000"
              style={{ padding: 8 }}
            />
            <Icon name="send-o" size={24} color="#000" style={{ padding: 8 }} />
          </View>
          <View>
            <Text style={{ fontWeight: 300 }}>
              Liked by Huoge and others 1,900
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={images.list}
                resizeMode="contain"
                style={styles.image}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "#F5F5F5",
                  width: 120,
                  height: 32,
                  borderRadius: 10,
                  justifyContent: "center",
                  marginLeft: 10,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 12,
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  150 response
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Post;
const styles = StyleSheet.create({
  image: {
    // flex: 1,
    width: 80,
    height: 50,
    // justifyContent: "center",
  },
});
