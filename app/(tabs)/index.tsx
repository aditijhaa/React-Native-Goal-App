import GoalInput from "@/components/ui/GoalInput";
import GoalItem from "@/components/ui/GoalItem";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export type Goal = {
  key: string;
  text: string;
};

export default function HomeScreen() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function goalHandler(goalText: string) {
    setGoals((currentGoal) => [
      ...currentGoal,
      { text: goalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.container}>
      <GoalInput goalHandler={goalHandler} />
      <View style={styles.goalConatainer}>
        <FlatList
          data={goals}
          renderItem={(item) => {
            return <GoalItem text={item.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.key;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalConatainer: {
    flex: 4,
  },
});
