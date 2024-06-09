import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  SectionList,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useNavigation } from "@react-navigation/native";
import { ImageSlider } from "../components";
import { images } from "../constants";
import { ScrollView } from "react-native";

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
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
      <Text style={styles.header}>Top Course</Text>
      {/* <ScrollView> */}
      <View style={styles.bottom}>
        <FlatList
          data={TOPDATA}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("(screens)")}>
              <View
                style={{
                  margin: 10,
                  height: 160,
                  width: 200,
                  borderRadius: 20,
                  overflow: "hidden", // Ensure the gradient doesn't spill over
                }}
              >
                <Image style={styles.tinyLogo} source={{ uri: item.image }} />
                <LinearGradient
                  // Gradient colors
                  colors={["transparent", "rgba(0,0,0,0.6)"]}
                  // Start and end positions
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 160,
                  }}
                >
                  <Text
                    style={{
                      position: "absolute",
                      top: 100,
                      left: 5,
                      color: "white",
                      fontWeight: "700",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Text>
                </LinearGradient>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* <ImageSlider /> */}
      </View>
      {/* </ScrollView> */}
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
    backgroundColor: "",
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
});
