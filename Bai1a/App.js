import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#C9EFEF", "#2BF4AE"]} start={[0.9, 0.1]}>
        <View style={styles.image}>
          <Image source={require("./images/circle.png")}></Image>
        </View>
        <View style={styles.text}>
          <View style={styles.text1}>
            <Text
              style={[
                { fontSize: 40 },
                { color: "black" },
                { fontWeight: "bold", textAlign:'center',width:300,height:100 },
              ]}
            >
              GROW YOUR BUSINESS
            </Text>
          </View>
          <View style={styles.text2}>
            <Text
              style={[
                { fontSize: 17 },
                { color: "black" },
                { fontWeight: "bold" },
                { textAlign: "center", paddingRight: 40 },
              ]}
            >
              We will help you to grow your business using online server
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textBtn}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSign}>
            <Text style={styles.textBtn}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomText}>
          <Text style={styles.textBottom}>HOW WE WORK?</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#2BF4AE",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 2,
  },
  text1: {
    flex: 1,
    alignItems: "center",
    marginTop:50
  },
  text2: {
    width: "100%",
    flex: 1,
    marginHorizontal: 20,
    textAlign: "center",
    marginTop:70
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
  },
  btnLogin: {
    flex: 1,
    backgroundColor: "#E3C000",
    height: 50,
    marginHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop:50
  },
  btnSign: {
    flex: 1,
    backgroundColor: "#E3C000",
    height: 50,
    marginHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop:50
  },
  textBtn:{
    fontSize:17,
    fontWeight:'bold'
  },

  bottomText: {
    flex: 1,
    fontSize: 30,
    fontWeight: "700",
    alignItems: "center",
  },
  textBottom:{
    fontSize:20,
    fontWeight:'bold'
  }
});
export default App;
