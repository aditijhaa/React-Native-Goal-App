import { Pressable, StyleSheet, Text, View } from "react-native";

type GoalItemProps = {
  id: string;
  text: string;
  onDeleteItem: (id: string) => void;
};

export default function GoalItem({ id, text, onDeleteItem }: GoalItemProps) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDeleteItem(id)}
        android_ripple={{ color: "gray" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "purple",
    borderRadius: 5,
  },
  goalText: {
    color: "white",
    padding: 16,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
