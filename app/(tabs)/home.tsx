import {
  Platform,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
// import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { CusButton, ImageSlider, Post } from "../components";
import VideoScreen from "../components/Video";
import { useNavigation } from "@react-navigation/native";
import posts from "../data/PostData";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  image: string;
  content: string;
  author: string;
  time: string;
};
export default function HomeScreen() {
  const navigation = useNavigation();
  const [post, setPosts] = useState<Post[]>(posts);

  useEffect(() => {
    setPosts(post);
    console.log(post);
  }, [post]);

  return (
    <View style={styles.container}>
      <View style={{}}>
        {/* <ImageSlider /> */}
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    // backgroundColor: "#F5F5F5",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
    // paddingHorizontal: 20,
  },
  // postContainer: {
  //   marginBottom: 20,
  //   width: "90%",
  //   borderWidth: 1,
  //   borderColor: "#ccc",
  //   borderRadius: 10,
  //   padding: 10,
  // },
});
