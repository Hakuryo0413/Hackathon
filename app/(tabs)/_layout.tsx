import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Image, Pressable, View, useColorScheme } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { Text } from "@/components/Themed";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const DWidth = Dimensions.get("screen").width;
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",

        tabBarStyle: {
          backgroundColor: "orange",
          borderRadius: 35,
          height: 80,
          paddingTop: 10,
          margin: 10,
          marginBottom: 15,
        },

        headerStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Feeds",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
          // headerLeft: () => (
          //   <View
          //     style={{
          //       alignItems: "center",
          //       flexDirection: "row",

          //       backgroundColor: "white",
          //       height: 50,
          //       width: DWidth,
          //       paddingHorizontal: 20,
          //     }}
          //   >
          //     {/* <Ionicons name="md-menu-sharp" size={24} color="white" /> */}
          //     <Image
          //       resizeMode="contain"
          //       style={{
          //         width: 90,
          //         height: 50,
          //         marginLeft: "auto",
          //         marginRight: "auto",
          //       }}
          //       // source={require("../../assets/images/movie/logo.png")}
          //     />
          //   </View>
          // ),
        }}
      />

      <Tabs.Screen
        name="course"
        options={{
          title: "Course",
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),

          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="call"
        options={{
          title: "Call",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="survey"
        options={{
          title: "Photo",
          tabBarIcon: ({ color }) => (
            <AntDesign name="plus" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
