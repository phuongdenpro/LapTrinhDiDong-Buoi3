import { StatusBar } from "expo-status-bar";
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const App = () => {
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
        <TouchableOpacity style={styles.btnSign}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomText}>
        <Text>How we work?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2BF4AE",
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    flex:2,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    flex:1,
  },
  text1:{
    flex:1,
    alignItems:'center',
    fontSize:25,
    fontWeight:'bold',
    color:'black',
    
  },
  text2:{
    flex: 1,
    marginHorizontal:20,
    textAlign:'center',
    
  },
  bottom:{
    flex: 1,
    flexDirection:"row"
  },
  btnLogin:{
    flex:1,
    backgroundColor:'#E3C000',
    height:50,
    marginHorizontal:30,
    justifyContent:'center',
    alignItems:'center',
  },
  btnSign:{
    flex:1,
    backgroundColor:'#E3C000',
    height:50,
    marginHorizontal:30,
    justifyContent:'center',
    alignItems:'center'
  },

  bottomText:{
    flex:1,
    fontSize:30,
    fontWeight:'700'
  }

});
export default App;
