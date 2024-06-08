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

const DATA = [
  {
    title: "All Course",
    data: [
      {
        image: "path_to_pizza_image",
        title: "Pizza",
        question: "What toppings do you want on your pizza?",
      },
      {
        image: "path_to_burger_image",
        title: "Burger",
        question: "How do you want your burger cooked?",
      },
      {
        image: "path_to_risotto_image",
        title: "Risotto",
        question: "Do you have any dietary restrictions?",
      },
    ],
  },
];
const TOPDATA = [
  {
    image: "path_to_pizza_image",
    title: "Pizza",
    question: "3 questions",
  },
  {
    image: "path_to_burger_image",
    title: "Burger",
    question: "3 questions",
  },
  {
    image: "path_to_risotto_image",
    title: "Risotto",
    question: "3 questions",
  },
];

export default function CourseScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Top Course</Text>
      <FlatList
        data={TOPDATA}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("(screens)")}>
            <View
              style={{
                margin: 10,
                padding: 20,
                backgroundColor: "lightgray",
                borderRadius: 10,
              }}
            >
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.title}>{item.question}</Text>

              {/* <Text style={styles.title}>{item.question}</Text> */}
            </View>
          </TouchableOpacity>
        )}
      />
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("(screens)")}>
            <View style={styles.item}>
              {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.title}>{item.question}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 24,
    // backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
