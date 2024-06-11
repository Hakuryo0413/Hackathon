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

const FlatlistScreen = () => {
  const navigation = useNavigation();
  return (
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
  );
};
const styles = StyleSheet.create({
  tinyLogo: {
    // width: 160,
    height: 160,
    resizeMode: "cover",
  },
});
export default FlatlistScreen;
