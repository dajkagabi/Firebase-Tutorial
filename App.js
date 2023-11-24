import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { set, ref } from "firebase/database";
import { db } from "./components/config";

export default function App() {
  // Új állapot felhasználónév tárolásához
  const [username, setName] = useState("");
  // Új állapot  az email tárolásához
  const [email, setEmail] = useState("");
  // Új állapot a jelszó tárolásához
  const [password, setPassword] = useState("");

  function create() {
    //Útvonal építés a firebase-hez
    set(ref(db, "users/" + username), {
      username: username,
      email: email,
      password: password,
    })
      .then(() => {
        alert("data submitted");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello React-Native!</Text>
      <Text style={styles.text}>Hello Firebase!</Text>

      <TextInput
        value={username}
        onChangeText={(username) => {
          setName(username);
        }}
        placeholder="Username"
        style={styles.textBoxes}
      />

      <TextInput
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        placeholder="Email"
        style={styles.textBoxes}
      />

      <TextInput
        value={password}
        onChangeText={(password) => {
          setPassword(password);
        }}
        placeholder="Password"
        // A secureTextEntry tulajdonság elrejti a beírt karaktereket
        secureTextEntry={true}
        style={styles.textBoxes}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={create} title="Submit Data" color="royalblue" />
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
  textBoxes: {
    width: "90%",
    fontSize: 18,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
    borderColor: "royalblue",
  
  },
  buttonContainer: {
    width: "90%",
    overflow: "hidden",
    marginTop: 20,
    backgroundColor: "royalblue",
    borderRadius: 10,
    
  },
  text:{
    fontSize: 18,
    color: "royalblue",
    fontWeight: "bold",
    marginTop: 5,
  }
});
