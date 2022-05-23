import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>A Basic React App</Text>
      <TextInput placeholder="Your name here" style={styles.input} />
      <Button title="Click me" color="#000" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#ff00ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 60,
    color: "#fff",
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#fff",
    borderWidth: 2,
    color: "#fff",
    marginBottom: 10,
  },
});
