import React from "react";
import { View, Image, FlatList, Dimensions, StyleSheet } from "react-native";

const images = [
  {
    id: 1,
    uri: "https://static.vecteezy.com/system/resources/thumbnails/027/254/720/small_2x/colorful-ink-splash-on-transparent-background-png.png",
  },
  {
    id: 2,
    uri: "https://static.vecteezy.com/system/resources/thumbnails/027/254/720/small_2x/colorful-ink-splash-on-transparent-background-png.png",
  },
  {
    id: 3,
    uri: "https://static.vecteezy.com/system/resources/thumbnails/027/254/720/small_2x/colorful-ink-splash-on-transparent-background-png.png",
  },
  // Add more images as needed
];

const ImageSlider = (style: any) => {
  const renderItem = ({ item }: { item: any }) => (
    <Image source={{ uri: item.uri }} style={styles.image} />
  );

  return (
    <FlatList
      data={images}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width, // Chiều rộng của cửa sổ
    height: "40%", // Chiều cao tối đa
    resizeMode: "cover",
    // Đảm bảo hình ảnh bao phủ hoàn toàn không gian
    backgroundColor: "lightgray",
  },
});

export default ImageSlider;
