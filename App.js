import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text>Open up App.js to start working on your app</Text>
      <TextInput placeholder="Your name here" style={styles.input} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // Keep?
    backgroundColor: "#ff00ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
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
