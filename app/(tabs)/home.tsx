import {
  Platform,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
// import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { CusButton, ImageSlider, Post } from "../components";
import VideoScreen from "../components/Video";
import { useNavigation } from "@react-navigation/native";

const posts = [
  {
    id: 1,
    image:
      "https://uniquevietnam.vn/wp-content/uploads/2021/09/quang-cao-banner-poster-trong-xe-bus-unique-ooh-14.jpg",
    content:
      "Lớp m có đứa ctrai chuyên đánh đập các bạn nữ nhưng mình là tâm điểm chú ý của bọn con trai vì m mập mạp và hiền có lúc mình đg nói chuyện với bạn mình thì tự nhiên nó đá vào tay mình có lần méc thấy cô nhưng thầy cô ko chú ý những gì mình nói. Nó nhìn thấy mách nó lại đánh. Gia đình mình ly hôn từ nhỏ mình phải sống với bác. Bác mình rất khó nếu mình nói vs bác mình mình bị blhđ thì sẽ bác cho chuyển trường trước. Nhưng mình còn tiếc nhưng người bạn tốt của mình  mình đang học cùng trường",
    author: "Người tham gia ẩn danh",
    time: "24 minutes",
  },
  {
    id: 2,
    image:
      "https://cdn.luatvietnam.vn/uploaded/Images/Original/2023/03/22/bao-luc-hoc-duong-la-nhung-hanh-vi-gay-ton-hai-den-the-chat-va-tinh-than-cua-nguoi-hoc-trong-moi-truong-hoc-duong_2203164940.jpg",
    content:
      "Mình đánh mất nó rồi sao ? Ý mình là cảm xúc. Mình đã và đang là nạn nhân của blhđ, blnt, qrtd, blm. Khi đi học mình cũng mang theo dao rọc giấy để rạch tay cả. Mình cố kìm nén cảm xúc của mình lại. Mình tự nhủ với bản thân rằng mình không được khóc, khóc là yếu đuối, chỉ có đứa hèn nhát mới khóc. Mình cũng không cười. Mình như là mất đi cả nụ cười vậy. Vì, mình có lí do gì để cười đâu. Mình dần không cảm nhận được niềm vui nữa. Có lẽ, ngay cả cách cười mình cũng quên mất..? Họ gào thét, chì chiết, chửi rủa, nhục mạ mình. Thật khó để tồn tại trên đời.",
    author: "Người tham gia ẩn danh",
    time: "12 minutes",
  },
  // {
  //   id: 3,
  //   image:
  //     "https://uniquevietnam.vn/wp-content/uploads/2021/09/quang-cao-banner-poster-trong-xe-bus-unique-ooh-14.jpg",
  //   content: "This is the third post.",
  //   author: "Người tham gia ẩn danh",
  // },
];
export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{}}>
        {/* <ImageSlider /> */}
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    // backgroundColor: "#F5F5F5",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
    // paddingHorizontal: 20,
  },
  // postContainer: {
  //   marginBottom: 20,
  //   width: "90%",
  //   borderWidth: 1,
  //   borderColor: "#ccc",
  //   borderRadius: 10,
  //   padding: 10,
  // },
});
