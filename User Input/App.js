import { React, useState } from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";

export default function App() {
  // Input ke liye temporary state
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [department, setDepartment] = useState("");
  const [fatherName, setFatherName] = useState("");

  // Display ke liye final state
  const [displayName, setDisplayName] = useState("");
  const [displayId, setDisplayId] = useState("");
  const [displayDepartment, setDisplayDepartment] = useState("");
  const [displayFatherName, setDisplayFatherName] = useState("");

  const handleSubmit = () => {
    // Jab button dabayen to ye values update hongi
    setDisplayName(name);
    setDisplayId(id);
    setDisplayDepartment(department);
    setDisplayFatherName(fatherName);
  };

  return (
    <View style={styles.view}>
      <View style={styles.view2}>
        <Text style={styles.text}>Enter Your Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          placeholderTextColor="lightgrey"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.text}>Enter Your ID:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          placeholderTextColor="lightgrey"
          value={id}
          onChangeText={(text) => setId(text)}
        />

        <Text style={styles.text}>Enter Your Department</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          placeholderTextColor="lightgrey"
          value={department}
          onChangeText={(text) => setDepartment(text)}
        />

        <Text style={styles.text}>Enter Your Father Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          placeholderTextColor="lightgrey"
          value={fatherName}
          onChangeText={(text) => setFatherName(text)}
        />
      </View>

      {/* Submit Button */}
      <Pressable style={styles.btn} onPress={handleSubmit}>
        <Text style={{ color: "white" }}>Submit</Text>
      </Pressable>

      {/* Display View */}
      <View style={styles.view3}>
        <Text style={styles.text}>Your Name is: {displayName}</Text>
        <Text style={styles.text}>Your ID is: {displayId}</Text>
        <Text style={styles.text}>Your Department is: {displayDepartment}</Text>
        <Text style={styles.text}>Your Father Name is: {displayFatherName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1, width: "100%", backgroundColor: "grey" },
  view2: {
    width: 350,
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 30,
  },
  input: {
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    marginTop: 15,
    padding: 10,
    color: "white",
  },
  text: { color: "white", fontSize: 16, marginTop: 10 },
  view3: {
    width: 350,
    height: 150,
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 30,
  },
  btn: {
    marginLeft: 150,
    marginTop: 20,
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 10,
  },
});
