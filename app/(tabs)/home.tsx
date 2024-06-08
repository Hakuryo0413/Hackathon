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

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{}}>
        {/* <ImageSlider /> */}
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View>
            <Post />
          </View>
          <View>
            <Post />
          </View>
          {/* <View>
            <Post />
          </View> */}
        </ScrollView>
        {/* <CusButton
          title="Create Post"
          handlePress={() => navigation.navigate("(posts)")}
        /> */}
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
