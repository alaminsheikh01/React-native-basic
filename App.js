import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another piece of text!</Text>
      </View>
      <Text
        style={{
          margin: 16,
          borderWidth: 2,
          borderColor: "white",
          padding: 16,
          borderRadius: 10,
          backgroundColor: "teal",
          color: "white",
        }}
      >
        Hello world
      </Text>
      <Button title="Tap me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
