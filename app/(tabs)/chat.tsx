import {
  Platform,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
// import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { CusButton, ImageSlider } from "../components";
import VideoScreen from "../components/Video";
import { useNavigation } from "@react-navigation/native";
import { images } from "../constants";
import Doctor from "../../assets/icons/doctor";

export default function ChatScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={images.splash}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.middle}>
        <View
          style={{
            flexDirection: "row",
            height: 150,
            marginTop: 20,
            justifyContent: "center",
            // borderRadius: 20,
            // marginHorizontal: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#686BFF",
              justifyContent: "center",
              width: "95%",
              paddingLeft: 15, // marginHorizontal: 40,

              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                marginLeft: 10,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Chat with
            </Text>
            <Text
              style={{
                fontSize: 24,
                marginLeft: 10,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Chatbot Shiled
            </Text>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 12,
                fontWeight: 500,
                color: "white",
                fontStyle: "italic",
              }}
            >
              Available 24/7, for free
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("(chats)")}
            >
              <Text
                style={{
                  color: "black",

                  // justifyContent: "center",
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                Start
              </Text>
            </TouchableOpacity>
            <Doctor
              style={{
                position: "absolute",
                width: 250,
                height: 140,
                top: 10,
                left: 280,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 150,
            marginTop: 20,
            justifyContent: "center",
            // borderRadius: 20,
            // marginHorizontal: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#466CFF",
              justifyContent: "center",
              width: "95%",
              paddingLeft: 15, // marginHorizontal: 40,

              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                marginLeft: 10,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Chat with
            </Text>
            <Text
              style={{
                fontSize: 24,
                marginLeft: 10,
                fontWeight: "bold",
                color: "white",
              }}
            >
              A Doctor
            </Text>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 12,
                fontWeight: 500,
                color: "white",
                fontStyle: "italic",
              }}
            >
              8AM - 8PM
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("(chats)")}
            >
              <Text
                style={{
                  color: "black",

                  // justifyContent: "center",
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                Start
              </Text>
            </TouchableOpacity>
            <Doctor
              style={{
                position: "absolute",
                width: 250,
                height: 140,
                top: 10,
                left: 280,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    flex: 0.7,
    backgroundColor: "#F3F4F5",
    // justifyContent: "center",
  },

  image: {
    // flex: 1,
    width: 250,
    height: 250,
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    // alignItems: "center",
    backgroundColor: "white",
    // padding: 10,
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 15,
    height: 30,
    width: "30%",
    // marginHorizontal: 120,
  },
});
