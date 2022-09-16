import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require("./images/circle.png")}></Image>
      </View>
      <View style={styles.text}>
        <View style={styles.text1}>
          <Text>GROW YOUR BUSINESS</Text>
        </View>
        <View style={styles.text2}>
          <Text>
            We will help you to grow your business using online server
          </Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.btnLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSigin}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>
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
