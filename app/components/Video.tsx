import { useVideoPlayer, VideoView } from "expo-video";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  PixelRatio,
  StyleSheet,
  View,
  Button,
  Dimensions,
  Alert,
} from "react-native";
import YouTube from "react-native-youtube";
import YoutubePlayer from "react-native-youtube-iframe";
const videoSource =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4";

export default function VideoScreen() {
  // const [playing, setPlaying] = useState(false);
  // const onStateChange = useCallback((state: string) => {
  //   if (state === "ended") {
  //     setPlaying(false);
  //     Alert.alert("video has finished playing!");
  //   }
  // }, []);

  // const togglePlaying = useCallback(() => {
  //   setPlaying((prev) => !prev);
  // }, []);
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  useEffect(() => {
    const subscription = player.addListener("playingChange", (isPlaying) => {
      setIsPlaying(isPlaying);
    });

    return () => {
      subscription.remove();
    };
  }, [player]);

  return (
    // <View style={styles.contentContainer}>
    //   <YouTube
    //     videoId="https://youtu.be/abPmZCZZrFA?si=kld9afYr5AhZY3hg"
    //     play={true}
    //     fullscreen={true}
    //     loop={true}
    //     apiKey="YOUR_API_KEY" // Add your YouTube API key here
    //     style={styles.video}
    //   />
    // </View>
    <View style={styles.contentContainer}>
      {/* <View>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={"iee2TATGMyI"}
          onChangeState={onStateChange}
        />
        <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
      </View> */}
      <VideoView
        ref={ref}
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
      {/* <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? "Pause" : "Play"}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
            setIsPlaying(!isPlaying);
          }}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: Dimensions.get("window").width, // Chiều rộng của cửa sổ
    height: "100%", // Chiều cao tối đa
    resizeMode: "cover",
  },
  controlsContainer: {
    padding: 10,
  },
});
