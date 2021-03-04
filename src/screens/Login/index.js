import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Users from "../../services/Users";

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim === "") {
      return Alert.alert("Nhập username!!!");
    }
    if (password.trim === "") {
      return Alert.alert("Nhập password!!!");
    }
    if (username !== Users.username || password !== Users.password) {
      return Alert.alert("Sai Username hoặc Password!!!");
    }
    navigation.navigate("Product");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.waper}>
        <Image
          source={require("../../img/logo.jpg")}
          style={styles.image}
        ></Image>
        <TextInput
          style={[styles.input, styles.username]}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        ></TextInput>

        <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  waper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#708090",
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: "rgba(0,0,0,.1)",
    borderRadius: 7,
    fontSize: 20,
    paddingHorizontal: 15,
    color: "#ffb6c1",
  },
  username: {
    marginBottom: 10,
    marginTop: 50,
  },
  image: {
    width: 300,
    height: 240,
    resizeMode: "contain",
  },
  btnLogin: {
    width: 300,
    height: 40,
    borderRadius: 7,
    backgroundColor: "#000",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogin: {
    color: "#00ffff",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default Login;
