import { StyleSheet, Text, View } from "react-native";

export default function (props: any) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 16,
    backgroundColor: "purple",
    borderRadius: 5,
  },
  goalText: {
    color: "white",
  },
});
