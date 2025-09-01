import GoalInput from "@/components/ui/GoalInput";
import GoalItem from "@/components/ui/GoalItem";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

export type Goal = {
  key: string;
  text: string;
};

export default function HomeScreen() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [modalIsVisible, setMoodalIsVisible] = useState(false);

  function goalHandler(goalText: string) {
    setGoals((currentGoal) => [
      ...currentGoal,
      { text: goalText, key: Math.random().toString() },
    ]);
    setMoodalIsVisible(false);
  }

  function deleteGoalHandler(id: string) {
    setGoals((currentGoal) => currentGoal.filter((goal) => goal.key !== id));
  }

  function modalHandler() {
    setMoodalIsVisible(true);
  }
  function modalCloseHandler() {
    setMoodalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Add New Goal" color="purple" onPress={modalHandler} />

        <GoalInput
          goalHandler={goalHandler}
          visible={modalIsVisible}
          onCancel={modalCloseHandler}
        />

        <View style={styles.goalConatainer}>
          <FlatList
            data={goals}
            renderItem={(item) => {
              return (
                <GoalItem
                  text={item.item.text}
                  id={item.item.key}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.key;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#402a67ff",
  },
  goalConatainer: {
    flex: 4,
  },
});
