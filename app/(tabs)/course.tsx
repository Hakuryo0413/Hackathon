import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  SectionList,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useNavigation } from "@react-navigation/native";
import { ImageSlider, ImageSlider2 } from "../components";
import { images } from "../constants";
import { ScrollView } from "react-native";
import FlatlistScreen from "../components/Flatlist";

const DATA = [
  {
    title: "All Course",
    data: [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN14va2UysC0lCRIYfN455lejU0f6qQUgT8N_bBnk60BUEqk1g",
        title:
          "Inspiring Women Leaders: An Introduction to Purpose-Driven Leadership",
        teacher: "Online Course",
      },
      {
        image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYeGnds_QuC4PE4dS54tUtAaVYVh75EQwllB4yILL4A6wSRwTQ",
        title: "Gender and Labour",
        teacher: "Online Course",
      },
    ],
  },
];
const TOPDATA = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmscJGDrY4eNrjj8ubY5d41JaDi3JCUPz4wjDH8zTGQfpwjRwq",
    title: "5 things you should know about HPV and cervical cancer",
    // question: "3 questions",
  },
  {
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2nmTS3lhXqD3D77OO3WcgAUZEl2oZ1l5gZRzZMGZ2dW35EwO9",
    title: "Principles of Feminist Transformational Leadership",
    // question: "3 questions",
  },
  // {
  //   image: "path_to_risotto_image",
  //   title: "Risotto",
  //   // question: "3 questions",
  // },
];

export default function CourseScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.top}>
          <ImageSlider />
        </View>
        <View style={styles.middle}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item.title + index}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("(screens)")}
              >
                <View style={styles.item}>
                  <Image
                    source={{ uri: item.image }}
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
                    <Text style={styles.title}>{item.title}</Text>
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
                </View>
              </TouchableOpacity>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
          <Text style={styles.header}>Top Course</Text>
          <FlatlistScreen />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.header}>More Courses you might like </Text>
          <Image source={images.img} style={styles.image2} />
          <Text style={styles.header}>You recently viewed</Text>
          <ImageSlider2 />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 10,
    backgroundColor: "",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
    // paddingHorizontal: 20,
  },
  top: {
    flex: 0.38,
    // backgroundColor: "pink",
  },
  middle: {
    flex: 0.45,
    backgroundColor: "#FAFBFC",
  },
  bottom: {
    flex: 0.265,
    backgroundColor: "#FAFBFC",
    // backgroundColor: "pink",
  },
  item: {
    // backgroundColor: "#f9c2ff",
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
  },
  header: {
    fontSize: 20,
    fontWeight: 600,
    marginVertical: 5,
    // backgroundColor: "#fff",
  },
  title: {
    fontSize: 17,
    fontWeight: 600,
    marginLeft: 8,
    marginRight: 25,
    paddingRight: 22,
    lineHeight: 26,
  },
  tinyLogo: {
    // width: 160,
    height: 160,
    resizeMode: "cover",
  },
  image: {
    width: 100,
    height: 90,
  },
  image2: {
    marginHorizontal: 10,
    height: 320,
    width: "100%",
    // marginTop:30,
    // width: Dimensions.get("window").width * 0.95, // Chiều rộng của cửa sổ
    // backgroundColor: "pink",
    resizeMode: "contain",

    // height: 150,
  },
});
