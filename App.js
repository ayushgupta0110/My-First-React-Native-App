import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from "./components/header";
// import TodoForm from "./components/todo-form";

export default function App() {
  const [todos, setTodo] = useState([
    { text: "create an app", key: "1" },
    { text: "play chrome dino", key: "2" },
    { text: "Buy vegis", key: "3" },
    { text: "Complete Assignments", key: "4" },
  ]);

  return (
    <View style={styles.container}>
      {/*Header */}
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
      {/* Status bar */}
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: "20",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    flex: 1,
    justifyContent: "center",
  },
});
