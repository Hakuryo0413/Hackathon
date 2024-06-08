import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import { Text, View } from "@/components/Themed";
import { CustomButton } from ".";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";

const PlaceholderImage: ImageSourcePropType = require("../../assets/icons/home.png");

const ImageViewer = ({
  placeholderImageSource = undefined,
  selectedImage = "",
}: {
  placeholderImageSource?: ImageSourcePropType;
  selectedImage?: string;
}) => {
  const imageSource: ImageSourcePropType | undefined = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
};

export default function Photo() {
  const [selectedImage, setSelectedImage] = useState("");
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);

      // setSelectedImage(result.uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab Two</Text> */}
      <CustomButton title="Choose a photo" handlePress={pickImageAsync} />
      <ImageViewer
        placeholderImageSource={PlaceholderImage}
        selectedImage={selectedImage}
        // style={styles.title}
      />
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
