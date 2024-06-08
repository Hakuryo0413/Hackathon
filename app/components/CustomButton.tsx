import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title = "",
  handlePress = () => {},
  isLoading = false,
  containerStyles = {},
  textStyles = {},
}) => {
  return (
    <Pressable
      style={[styles.button, { backgroundColor: "#fff" }]}
      onPress={handlePress}
    >
      <Text style={[styles.text, { color: "#000" }]}>{title}</Text>
    </Pressable>
    // <TouchableOpacity
    //   onPress={handlePress}
    //   activeOpacity={0.7}
    //   style={[styles.button, containerStyles, isLoading ? styles.loading : {}]}
    //   disabled={isLoading}
    // >
    //   <Text style={[styles.text, textStyles]}>{title}</Text>

    //   {/* {isLoading && <ActivityIndicator />} */}
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF6800",
    borderRadius: 20,
    minHeight: 62,
    minWidth: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  loading: {
    opacity: 0.5,
  },
});
export default CustomButton;
