import {
  StyleSheet,
  Image,
  ImageSourcePropType,
  Platform,
  Linking,
  TouchableOpacity,
} from "react-native";
// import { Text, View } from "@/components/Themed";
import { Text, View } from 'react-native';
import AnimatedSoundBars  from "../components/AnimatedSoundBars";
import { CustomButton } from "../components";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect} from "react";
import RNImmediatePhoneCall from '../components/PhoneCall';
import Wave from "react-native-waves"

export default function CallScreen() {

  const [counter, setCounter] = useState(0);
  const [mS, setMS] = useState(0);
  const [text, setText] = useState("Hello World");

  useEffect(() => {
    const interval = setInterval(async () => {
      setCounter((prevCounter) => prevCounter + 1);
      try {
        const url = `http://112.137.129.161:5000/predict?audio=audio_${counter}.wav`
        console.log(url)
        const response = await fetch(
          url,
        );
        console.log(response)
        const json = await response.json();
        console.log(json);
        // const int_json = parseInt(json);
        console.log(json["prediction"]);
        if (json["prediction"] == '1') {
          makePhoneCall()
          console.log("Call me now!")
          setText("Phát hiện tình huống nguy hiểm!");
        } 
        else {
          setText("Trò chuyện bình thường");
        }
      } catch (error) {
        console.error(error);
      }
      
      if (counter > 4) {
        setCounter(0)
        // makePhoneCall();
        clearInterval(interval);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [counter, mS]);
 
  
  // if you're doing it inside a component use state, if outside use a let that starts with false
  // if(myState || myLetVar === true) { // got what you wanted
  //   clearInterval(myInterval) // stops interval
  // }

  const makePhoneCall = () => {
    // RNImmediatePhoneCall.immediatePhoneCall('0123456789');
    if (Platform.OS === "android") {
      Linking.openURL("tel: 0911138586");
    } else {
      Linking.openURL("telprompt: 0911138586");
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          marginTop: '60%',
        }}>
        <Text style={{marginBottom: 40, display: 'flex', justifyContent: 'center', textAlign: 'center', fontSize: 20, fontWeight: 600}}> {text}</Text>
        <AnimatedSoundBars />
      </View>
      {/* {/* </View> */}
      {/* <Text>Counter: {counter}</Text>
      <Text>MS: {mS} </Text> */}
      
      {/* <TouchableOpacity onPress={() => makePhoneCall()}>
        <Text>Click here to make a phone call</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 500, // or any other size
    height: 500, // or any other size
    borderRadius: 10, // to make the image corners rounded
    marginTop: 20, // or any other size
  },
});
