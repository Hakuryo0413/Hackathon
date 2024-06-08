import React, { useState } from "react";
import { StatusBar, View, ImageBackground, Image } from "react-native";
import { CusButton } from "../components";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { images } from "../constants";
import { Text } from "@/components/Themed";

const Splash1 = () => {
  const navigation = useNavigation();
  const [isClicked, setIsClicked] = useState(false);

  const submit = () => {
    setIsClicked(!isClicked);

    navigation.navigate("splash2");
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.top}>
        <Image
          source={images.splash}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.middle}>
        <Text style={styles.text}>Your Safety Net, </Text>
        <Text style={styles.text}>Anytime,</Text>
        <Text style={styles.text}>Anywhere.</Text>
        <Text style={styles.content}>
          Experience life's momentum with health at your command.
        </Text>
      </View>

      <View style={styles.bottom}>
        <View style={{ flexDirection: "row" }}>
          <CusButton
            title="Skip"
            // handlePress={submit}
            containerStyles={{
              margin: 10,
              // backgroundColor: isClicked ? "#2EB5FA" : "transparent",
            }}
            // containerStyles="mt-7"
          />
          <CusButton
            title="Next"
            handlePress={submit}
            containerStyles={{
              margin: 10,

              // backgroundColor: "#2EB5FA",
            }}
            // containerStyles="mt-7"
          />
        </View>

        {/* <Text style={styles.text}>Inside</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    flex: 0.2,
    justifyContent: "center",
  },
  bottom: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal:2
    // flexDirection:
  },
  image: {
    // flex: 1,
    width: 360,
    height: 360,
    // justifyContent: "center",
  },
  button: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#000000c0",
  },
  text: {
    color: "black",
    fontSize: 32,
    lineHeight: 42,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "black",
  },
  content: {
    fontSize: 17,
    color: "#626262",
    textAlign: "center",
    margin: 20,
  },
});

export default Splash1;
