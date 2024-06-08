import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CusButton = ({
  title = "",
  handlePress = () => {},
  isLoading = false,
  containerStyles = {},
  textStyles = {},
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[styles.button, containerStyles, isLoading ? styles.loading : {}]}
      disabled={isLoading}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>

      {/* {isLoading && <ActivityIndicator />} */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#2EB5FA",
    borderRadius: 32,
    minHeight: 62,
    minWidth: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#2EB5FA",
    fontSize: 16,
    fontWeight: "500",
  },
  loading: {
    opacity: 0.5,
  },
});
export default CusButton;
