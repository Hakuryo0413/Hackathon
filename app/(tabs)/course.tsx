import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  SectionList,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useNavigation } from "@react-navigation/native";
import { ImageSlider } from "../components";
import { images } from "../constants";

const DATA = [
  {
    title: "All Course",
    data: [
      {
        image: "path_to_pizza_image",
        title: "English throught Alice's Adventures in Wonderlands",
      },
      {
        image: "path_to_burger_image",
        title: "English throught Alice's Adventures in Wonderlands",
      },
    ],
  },
];
const TOPDATA = [
  {
    image: "path_to_pizza_image",
    title: "Pizza",
    // question: "3 questions",
  },
  {
    image: "path_to_burger_image",
    title: "Burger",
    // question: "3 questions",
  },
  {
    image: "path_to_risotto_image",
    title: "Risotto",
    // question: "3 questions",
  },
];

export default function CourseScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <ImageSlider />
      </View>
      <View style={styles.middle}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.title + index}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("(screens)")}>
              <View style={styles.item}>
                {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
                <Image
                  source={images.splash}
                  resizeMode="contain"
                  style={styles.image}
                />
                <Text style={styles.title}>{item.title}</Text>
                {/* <Text style={styles.title}>{item.question}</Text> */}
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.header}>Top Course</Text>
        <FlatList
          data={TOPDATA}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("(screens)")}>
              <View
                style={{
                  margin: 10,
                  // padding: 20,
                  height: 160,
                  width: 160,
                  backgroundColor: "lightgray",
                  borderRadius: 10,
                }}
              >
                <Image style={styles.tinyLogo} source={images.splash} />
                <Text style={styles.title}>{item.title}</Text>
                {/* <Text style={styles.title}>{item.question}</Text> */}

                {/* <Text style={styles.title}>{item.question}</Text> */}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    backgroundColor: "",
  },
  top: {
    flex: 0.3,
    // backgroundColor: "pink",
  },
  middle: {
    flex: 0.4,
    backgroundColor: "#FAFBFC",
  },
  bottom: {
    flex: 0.3,
    // backgroundColor: "pink",
  },
  item: {
    // backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
  },
  header: {
    fontSize: 24,
    // backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    marginLeft: 8,
    lineHeight: 24,
  },
  tinyLogo: {
    width: 160,
    height: 120,
    resizeMode: "cover",
  },
  image: {
    width: 80,
    height: 80,
  },
});
