import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];
const SurveyScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[isFocus && { color: "blue" }]}>Dropdown label</Text>;
    }
    return null;
  };
  const [answers, setAnswers] = useState({
    gender: "",
    age: "",
    occupation: "",
    education: "",
    LGBTQ: "",
    violenceExperience: "",
    discriminationExperience: "",
    sexualHarassmentExperience: "",
    helpSeeking: "",
    lifeEventsInfluence: "",
    causesOfViolence: "",
    societalEfforts: "",
    suggestions: "",
  });

  const handleInputChange = (field: string, text: string) => {
    setAnswers({ ...answers, [field]: text });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Phần 1: Thông tin nhân khẩu học</Text>
        <Text>Giới tính của bạn là gì?</Text>
        {/* <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker> */}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select item" : "..."}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? "blue" : "black"}
              name="Safety"
              size={20}
            />
          )}
        />
        {/* <TextInput
          style={styles.input}
          value={answers.gender}
          onChangeText={(text) => handleInputChange("gender", text)}
        /> */}
        <Text>Độ tuổi của bạn là bao nhiêu?</Text>
        <TextInput
          style={styles.input}
          value={answers.age}
          onChangeText={(text) => handleInputChange("age", text)}
        />
        <Text>Bạn làm nghề nghiệp gì?</Text>
        <TextInput
          style={styles.input}
          value={answers.occupation}
          onChangeText={(text) => handleInputChange("occupation", text)}
        />
        <Text>Trình độ học vấn cao nhất của bạn là gì?</Text>
        <TextInput
          style={styles.input}
          value={answers.education}
          onChangeText={(text) => handleInputChange("education", text)}
        />
        <Text>Bạn có thuộc cộng đồng LGBTQ+ không?</Text>
        <TextInput
          style={styles.input}
          value={answers.LGBTQ}
          onChangeText={(text) => handleInputChange("LGBTQ", text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Phần 2: Trải nghiệm cá nhân</Text>
        <Text>Bạn đã bao giờ trải qua bạo lực giới chưa?</Text>
        <TextInput
          style={styles.input}
          value={answers.violenceExperience}
          onChangeText={(text) => handleInputChange("violenceExperience", text)}
        />
        {/* Add more questions here */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Phần 3: Quan điểm và nhận thức</Text>
        <Text>
          Bạn nghĩ đâu là nguyên nhân chính dẫn đến bạo lực giới, phân biệt đối
          xử và quấy rối tình dục?
        </Text>
        <TextInput
          style={styles.input}
          value={answers.causesOfViolence}
          onChangeText={(text) => handleInputChange("causesOfViolence", text)}
        />
        {/* Add more questions here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default SurveyScreen;
