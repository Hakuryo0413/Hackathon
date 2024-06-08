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
// import MessengerScreen from "./(tabs)/messenger";
const client = StreamChat.getInstance("enyzgxhqvaz4");
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
      const channel2 = client.channel("messaging", "the_park1", {
        name: "The Park1",
      });
      const channel3 = client.channel("messaging", "the_park2", {
        name: "The Park2",
      });
      await channel.watch();
      await channel2.watch();
      await channel3.watch();

      const members1 = await channel.queryMembers({});
      const members2 = await channel2.queryMembers({});
      const members3 = await channel3.queryMembers({});

      console.log("Members of the_park:", members1);
      console.log("Members of the_park1:", members2);
      console.log("Members of the_park2:", members3);
    };

    connect();
    console.log("Connected");
  }, []);

  const [channel, setChannel] = useState<ChannelType>();
  const [thread, setThread] = useState<MessageType | null>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <OverlayProvider>
        {/* <StatusBar backgroundColor="#161622" style="dark" /> */}
        <Chat client={client}>
          {channel ? (
            <Channel
              channel={channel}
              keyboardVerticalOffset={0}
              thread={thread}
              threadList={!!thread}
            >
              {thread ? (
                <Thread />
              ) : (
                <>
                  <MessageList onThreadSelect={setThread} />
                  <MessageInput />
                </>
              )}
            </Channel>
          ) : (
            <ChannelList onSelect={setChannel} />
          )}
        </Chat>
      </OverlayProvider>
    </SafeAreaView>
  );
};

export default ChatLayout;
