import React from "react";
import { StatusBar, View, ImageBackground } from "react-native";
import { Button } from "../components";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

const Splash1 = () => {
  const navigation = useNavigation();

  const submit = () => {
    navigation.navigate("splash2");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Button
          title="Get Started"
          handlePress={submit}
          containerStyles={{ margin: 20, marginTop: 780 }}
          // containerStyles="mt-7"
        />
        {/* <Text style={styles.text}>Inside</Text> */}
      </ImageBackground>
    </View>
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <StatusBar
    //     barStyle="dark-content"
    //     hidden={false}
    //     backgroundColor="transparent"
    //     translucent={true}
    //   />
    //   <Button title="Get Started" handlePress={submit} containerStyles="mt-7" />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#000000c0",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default Splash1;
