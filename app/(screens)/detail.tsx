import {
    Platform,
    StyleSheet,
    Touchable,
    TouchableOpacity,
    Linking,
  } from "react-native";
  // import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
  
  import EditScreenInfo from "@/components/EditScreenInfo";
  import { Text, View } from "@/components/Themed";
  import { CusButton } from "../components";
  import VideoScreen from "../components/Video";
  import { useNavigation } from "@react-navigation/native";
  
  export default function DetailScreen() {
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>Tab Two</Text> */}
        {/* <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        /> */}
  
        <VideoScreen />
        <CusButton
          title="Start exercise"
          handlePress={() => navigation.navigate("quiz")}
        />
        {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
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
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
    },
  });
  