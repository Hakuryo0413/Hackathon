import {
  StyleSheet,
  Image,
  ImageSourcePropType,
  Platform,
  Linking,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
  Pressable,
} from "react-native";
// import { Text, View } from "@/components/Themed";
import { Text, View } from "react-native";
import AnimatedSoundBars from "../components/AnimatedSoundBars";
import { CustomButton } from "../components";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import RNImmediatePhoneCall from "../components/PhoneCall";
import Wave from "react-native-waves";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const DATA = [
  {
    data: [
      {
        image: require("../../assets/images/record.jpeg"),

        title: "yt-script-figma.mp3",
        teacher: "13m 24s",
      },
      {
        image: require("../../assets/images/record.jpeg"),
        title: "lao-tzu-quote.mp3",
        teacher: "13m 24s",
      },
      {
        image: require("../../assets/images/record.jpeg"),

        title: "figma-tutorial.mp3",
        teacher: "13m 24s",
      },
      {
        image: require("../../assets/images/record.jpeg"),
        title: "emotional-speech.mp3",
        teacher: "13m 24s",
      },
      {
        image: require("../../assets/images/record.jpeg"),

        title: "figma-tutorial.mp3",
        teacher: "13m 24s",
      },
      {
        image: require("../../assets/images/record.jpeg"),
        title: "emotional-speech.mp3",
        teacher: "13m 24s",
      },
    ],
  },
];
export default function CallScreen() {
  const [counter, setCounter] = useState(0);
  const [mS, setMS] = useState(0);
  const [text, setText] = useState("Hello World");
  const navigation = useNavigation();

  // useEffect(() => {
  //   const interval = setInterval(async () => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //     try {
  //       const url = `http://112.137.129.161:5000/predict?audio=audio_${counter}.wav`;
  //       console.log(url);
  //       const response = await fetch(url);
  //       console.log(response);
  //       const json = await response.json();
  //       console.log(json);
  //       // const int_json = parseInt(json);
  //       console.log(json["prediction"]);
  //       if (json["prediction"] == "1") {
  //         makePhoneCall();
  //         console.log("Call me now!");
  //         setText("Phát hiện tình huống nguy hiểm!");
  //       } else {
  //         setText("Trò chuyện bình thường");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }

  //     if (counter > 4) {
  //       setCounter(0);
  //       // makePhoneCall();
  //       clearInterval(interval);
  //     }
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [counter, mS]);

  // if you're doing it inside a component use state, if outside use a let that starts with false
  // if(myState || myLetVar === true) { // got what you wanted
  //   clearInterval(myInterval) // stops interval
  // }

  // const makePhoneCall = () => {
  //   // RNImmediatePhoneCall.immediatePhoneCall('0123456789');
  //   if (Platform.OS === "android") {
  //     Linking.openURL("tel: 0911138586");
  //   } else {
  //     Linking.openURL("telprompt: 0911138586");
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text
          style={{
            // marginBottom: 40,
            // display: "flex",
            // justifyContent: "center",
            textAlign: "center",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          Voices Library
        </Text>
        <Text
          style={{
            // marginBottom: 40,
            // display: "flex",
            justifyContent: "center",
            textAlign: "center",
            fontSize: 16,
            color: "#535059",
            // fontWeight: 600,
          }}
        >
          Automatically recorded when sounds associated with violence are
          detected. And they will appear here.
        </Text>
        {/* <AnimatedSoundBars /> */}
      </View>
      <View style={styles.middle}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.title + index}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("(screens)")}>
              <View style={styles.item}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={styles.image}
                />
                <View
                  style={{
                    // backgroundColor: "pink",
                    justifyContent: "center",
                    marginRight: 40,
                    marginLeft: 20,
                  }}
                >
                  <Text
                    style={styles.title}
                    // numberOfLines={2}
                    // ellipsizeMode="tail"
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: "gray",
                      marginLeft: 8,
                      marginRight: 20,
                      paddingRight: 20,
                    }}
                  >
                    {item.teacher}
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    position: "absolute",

                    top: 20,
                    left: 260,
                  }}
                >
                  <Pressable>
                    {({ pressed }) => (
                      <AntDesign
                        name="play"
                        size={24}
                        color="#32ADE6"
                        style={{
                          marginRight: 15,
                          opacity: pressed ? 0.5 : 1,
                          justifyContent: "center",
                        }}
                      />
                    )}
                  </Pressable>
                </View>
              </View>
            </TouchableOpacity>
          )}
          // renderSectionHeader={({ section: { title } }) => (
          //   <Text style={styles.header}>{title}</Text>
          // )}
        />
      </View>
      {/* {/* </View> */}
      {/* <Text>Counter: {counter}</Text>
      <Text>MS: {mS} </Text> */}
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("(records)")}>
          <Text>Click here to record</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFBFC",

    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    flex: 0.1,
    backgroundColor: "#FAFBFC",

    // backgroundColor: "pink",
  },
  middle: {
    flex: 0.8,

    // width: "80%",
    backgroundColor: "#FAFBFC",
  },
  bottom: {
    flex: 0.1,
    // backgroundColor: "",
    // backgroundColor: "pink",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  // image: {
  //   width: 500, // or any other size
  //   height: 500, // or any other size
  //   borderRadius: 10, // to make the image corners rounded
  //   marginTop: 20, // or any other size
  // },
  item: {
    // backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 12,
    flexDirection: "row",
  },
  image: {
    width: 48,
    height: 48,
  },
});
