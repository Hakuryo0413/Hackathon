import {
  Platform,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Linking,
} from "react-native";
// import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Button, ImageSlider, Post } from "../components";
import VideoScreen from "../components/Video";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{}}>
        {/* <ImageSlider /> */}
        <Post />
        <Button
          title="Create Post"
          handlePress={() => navigation.navigate("(posts)")}
        />
        {/* <Post /> */}

        {/* <Text style={styles.title}>Tab Two</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
