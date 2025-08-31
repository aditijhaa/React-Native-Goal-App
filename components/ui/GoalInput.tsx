import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

type Props = {
  goalHandler: (goalText: string) => void;
};

export default function (props: Props) {
  const [goalText, setGoalText] = useState("");

  function goalHandler() {
    props.goalHandler(goalText);
    setGoalText("");
  }

  function inputHandler(goalText: any) {
    setGoalText(goalText);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Add your goal!"
        onChangeText={inputHandler}
        value={goalText}
      />
      <Button title="Add Goal" onPress={goalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  textInput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 8,
    padding: 8,
  },
});
