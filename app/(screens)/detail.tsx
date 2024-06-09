import {
  Platform,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  Button,
} from "react-native";
// import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import { LinearGradient } from "expo-linear-gradient";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { CusButton } from "../components";
import VideoScreen from "../components/Video";
import { useNavigation } from "@react-navigation/native";
import { images } from "../constants";
import Comment from "../components/Comment";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const TEACHERDATA = [
  {
    image: "path_to_teacher1_image",
    name: "John Doe",
    subject: "Mathematics",
    yearsExperience: 10,
  },
  {
    image: "path_to_teacher2_image",
    name: "Jane Smith",
    subject: "English Literature",
    yearsExperience: 5,
  },
  {
    image: "path_to_teacher3_image",
    name: "Richard Roe",
    subject: "Physics",
    yearsExperience: 8,
  },
];
const TOPDATA = [
  {
    image: "path_to_pizza_image",
    title: "Explain what is meant by ‘gender (in)equality’ and its core terms.",
    // question: "3 questions",
  },
  {
    image: "path_to_burger_image",
    title:
      "Describe how practices of gender inequality are sustained through gendered discourse and practice.",
    // question: "3 questions",
  },
  // {
  //   image: "path_to_risotto_image",
  //   title: "Risotto",
  //   // question: "3 questions",
  // },
];
export default function DetailScreen() {
  const navigation = useNavigation();
  const [showFullText, setShowFullText] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        /> */}
      <View style={styles.top}>
        <VideoScreen />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            backgroundColor: "#F3F4F5",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#6361F2",
              width: 180,
              height: 32,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Ionicons name="heart" size={18} color="white" />

            <Text
              style={{
                color: "white",
                fontSize: 16,
                textAlign: "center",
                justifyContent: "center",
                marginLeft: 4,
              }}
            >
              Add to Favourites
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.middle}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View
            style={{
              backgroundColor: "#2EB5FA",
              height: 80,
              borderRadius: 20,
              justifyContent: "center",
              paddingHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 24, color: "white" }}>Free</Text>
            <Text style={{ fontSize: 16, color: "black" }}>Still 9h 42min</Text>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            About the course
          </Text>

          {/* <ScrollView style={styles.scrollView}> */}
          <Text style={styles.text}>
            {showFullText
              ? "Gender inequality persists as a significant societal challenge, driven by entrenched causes and resulting in far-reaching consequences. Rooted in social norms, economic disparities, limited access to education, discriminatory laws, and pervasive violence, gender inequality perpetuates injustice and hinders progress. Its consequences span diminished economic growth, health disparities, social and political instability, and strained interpersonal relationships. Overcoming gender inequality demands concerted efforts, including promoting education and awareness, enacting legal reforms, empowering women with economic opportunities, increasing political representation, fostering inclusive work environments, engaging communities, and challenging media and cultural representations. By addressing its causes and consequences through comprehensive strategies, societies can strive towards a more equitable and inclusive future."
              : "Gender inequality is a key challenge in society. Explore its causes and consequences and consider the ways you can overcome it."}
          </Text>
          {!showFullText ? (
            <Button title="See More" onPress={() => setShowFullText(true)} />
          ) : (
            <Button title="See Less" onPress={() => setShowFullText(false)} />
          )}
          {/* </ScrollView> */}
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Teacher </Text>

          <FlatList
            data={TEACHERDATA}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("(screens)")}
              >
                <View style={styles.item}>
                  {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
                  <Image
                    source={images.splash}
                    resizeMode="contain"
                    style={styles.image}
                  />
                  <View style={{ marginVertical: 4, marginHorizontal: 4 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {item.name}
                    </Text>
                    <Text style={{ fontSize: 12 }}>{item.subject}</Text>
                  </View>

                  {/* <Text style={styles.title}>{item.name}</Text> */}

                  {/* <Text style={styles.title}>{item.question}</Text> */}
                </View>
              </TouchableOpacity>
            )}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            What will the child learn?
          </Text>
          <FlatList
            data={TOPDATA}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("(screens)")}
              >
                <LinearGradient
                  // Gradient colors
                  colors={["#32ADE6", "#FFFFFF"]}
                  // Start and end positions
                  start={{ x: 0, y: 0 }} // Điểm bắt đầu: góc trên bên trái
                  end={{ x: 1, y: 1.7 }} // Điểm kết thúc: góc dưới bên phải
                  style={{
                    margin: 10,
                    height: 200,
                    width: 180,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center", // Added for centering text
                  }}
                >
                  {/* <Image style={styles.tinyLogo} source={images.splash} /> */}
                  <Text style={styles.title}>{item.title}</Text>
                  {/* <Text style={styles.title}>{item.question}</Text> */}
                  {/* <Text style={styles.title}>{item.question}</Text> */}
                </LinearGradient>
              </TouchableOpacity>
            )}
          />
          <View style={{ backgroundColor: "#f3f4f5" }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Review about the course
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 4,
                marginRight: 20,
                backgroundColor: "#f3f4f5",
              }}
            >
              <Ionicons name="star" size={18} color="#ff9d42" />
              <Ionicons name="star" size={18} color="#ff9d42" />
              <Ionicons name="star" size={18} color="#ff9d42" />
              <Ionicons name="star" size={18} color="#ff9d42" />
              <Ionicons name="star" size={18} color="#ff9d42" />

              <Text style={[{ fontSize: 16, fontWeight: "bold" }]}> 5.0 </Text>
            </View>
            <Text style={[{ fontSize: 14 }]}> 24 reviews </Text>
          </View>

          <Comment />
          <Comment />
        </ScrollView>
      </View>

      <View style={styles.bottom}>
        {/* <CusButton
          title="Start quiz"
          handlePress={() => navigation.navigate("quiz")}
        /> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("quiz")}
        >
          <Text
            style={{
              color: "white",
              // justifyContent: "center",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Start Quiz
          </Text>
        </TouchableOpacity>
      </View>

      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    // alignItems: "center",
    paddingVertical: 12,
  },
  top: {
    flex: 0.3,
    backgroundColor: "#F3F4F5",
  },
  middle: {
    flex: 0.6,
    backgroundColor: "#F3F4F5",
    marginHorizontal: 20,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 20,
    // backgroundColor: "yellow",
  },
  bottom: {
    flex: 0.1,
    backgroundColor: "#F3F4F5",
    marginHorizontal: 20,
  },
  item: {
    // backgroundColor: "#f9c2ff",
    padding: 12,
    height: 80,
    width: 200,
    borderRadius: 12,
    marginHorizontal: 4,
    marginVertical: 8,
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2EB5FA",
    padding: 10,
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15,
    height: 50,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: "80%",
  // },
  scrollView: {
    // maxHeight: 120,
    // backgroundColor: "pink",
    // marginHorizontal: 20,
  },
  tinyLogo: {
    width: 180,
    height: 150,
    resizeMode: "cover",
  },
  text: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  header: {
    fontSize: 20,
    marginHorizontal: 20,
    fontWeight: "bold",
    // backgroundColor: "#fff",
  },
});
