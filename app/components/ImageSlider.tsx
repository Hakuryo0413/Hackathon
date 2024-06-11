import React from "react";
import {
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import course from "../constants/images";
import { useNavigation } from "@react-navigation/native";

const images = [
  {
    id: 1,
    source: require("../../assets/images/course.jpeg"),
  },
  {
    id: 2,
    source: require("../../assets/images/2.jpeg"),
  },
  {
    id: 3,
    source: require("../../assets/images/2-4.jpeg"),
  },
];

const ImageSlider = (style: any) => {
  const navigation = useNavigation();
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => navigation.navigate("(screens)")}>
      <Image source={item.source} style={styles.image} />
    </TouchableOpacity>
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
    // width: "100%",
    width: Dimensions.get("window").width * 0.955, // Chiều rộng của cửa sổ
    height: 260,
    // height: "50%", // Chiều cao tối đa
    resizeMode: "cover",
    // Đảm bảo hình ảnh bao phủ hoàn toàn không gian
    backgroundColor: "lightgray",
  },
});

export default ImageSlider;
