import React, { useEffect, useState } from "react";
import {
  Chat,
  OverlayProvider,
  ChannelList,
  Channel,
  MessageList,
  MessageInput,
  MessageType,
  Thread,
} from "stream-chat-expo";
import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView, Text, View } from "react-native";
import { WebView } from "react-native-webview";
// import MessengerScreen from "./(tabs)/messenger";
const client = StreamChat.getInstance("94a3w42k2qn3");
import { Channel as ChannelType, StreamChat } from "stream-chat";

const ChatLayout = () => {
  useEffect(() => {
    const connect = async () => {
      await client.connectUser(
        {
          id: "jlahey",
          name: "Jim Lahey",
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        client.devToken("jlahey")
      );

      const channel = client.channel("messaging", "the_park", {
        name: "The Park",
      });
      const channel2 = client.channel("messaging", "the_doctor1", {
        name: "The Doctor1",
      });
      const channel3 = client.channel("messaging", "the_doctor2", {
        name: "The Doctor2",
      });
      await channel.watch();
      await channel2.watch();
      await channel3.watch();
      await channel.addMembers(["jlahey"]);
      const members1 = await channel.queryMembers({});
      // const members2 = await channel2.queryMembers({});
      // const members3 = await channel3.queryMembers({});

      console.log("Members of the_park:", members1);
      // console.log("Members of the_park1:", members2);
      // console.log("Members of the_park2:", members3);
    };

    connect();
    console.log("Connected");
  }, []);

  const [channel, setChannel] = useState<ChannelType>();
  const [thread, setThread] = useState<MessageType | null>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        originWhitelist={["*"]}
        source={{ uri: "https://hinnycoder.github.io/" }}
      />
    </SafeAreaView>
  );
};

export default ChatLayout;
