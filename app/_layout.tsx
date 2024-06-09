import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { Stack } from "expo-router";
import { useEffect } from "react";
import "react-native-reanimated";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen, Stack } from "expo-router";

import { useColorScheme } from "@/components/useColorScheme";
import {
  Pressable,
  View,
  Image,
  StyleSheet,
  Platform,
  Linking,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SOS from "../assets/icons/sos";
import { images } from "./constants";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {
//   // Ensure that reloading on /modal keeps a back button present.
//   initialRouteName: "(splashs)",
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const makePhoneCall = () => {
    if (Platform.OS === "android") {
      Linking.openURL("tel: 113");
    } else {
      Linking.openURL("telprompt: 113");
    }
  };
  return (
    // <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(splashs)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
        <Stack.Screen name="(posts)" options={{ headerShown: false }} />
        <Stack.Screen name="(records)" options={{ headerShown: false }} />

        <Stack.Screen name="modal" options={{ headerShown: false }} />
        <Stack.Screen name="(mess)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(channels)" options={{ headerShown: false }} /> */}

        <Stack.Screen name="(chats)" options={{ headerShown: false }} />

        {/* <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="search/[query]" options={{ headerShown: false }} /> */}
      </Stack>
      {/* <View
        style={{
          width: 70,
          height: 70,
          // backgroundColor: "pink",
          position: "absolute", // Position it absolutely
          bottom: 70, // Position it 10px from the bottom
          left: 30, // Position it 10px from the right
          marginBottom: 90,
        }}
      >
        <TouchableOpacity onPress={() => makePhoneCall()}>
          <Image source={images.sos} resizeMode="cover" style={styles.image} />
        </TouchableOpacity>
      </View> */}
    </GestureHandlerRootView>
  );
}

{
  /* </ThemeProvider> */
}
const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    // marginBottom: 80,
    borderRadius: 200,
  },
});
