import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text>Open up App.js to start working on your app</Text>
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
});
