import React from "react";
import { View, Text, TouchableOpacity, Linking, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Schedule = () => {
  const handlePhonePress = () => {
    Linking.openURL("tel:+84915103808");
  };

  const handleEmailPress = () => {
    Linking.openURL("mailto:phamquoccuongv@gmail.com");
  };

  const handleZaloPress = () => {
    Linking.openURL("https://zalo.me/0915103808");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/cuong.jpg")} style={styles.avatar} />
        <Text style={styles.title}>Phạm Quốc Cường</Text>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={handlePhonePress}>
            <Ionicons name="call-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
            <Ionicons name="mail-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
            <Ionicons name="mail-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Video</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.info}>
        <TouchableOpacity style={styles.button1} onPress={handleEmailPress}>
          <TouchableOpacity onPress={handleZaloPress}>
            <Image
              source={require("../assets/zalo-logo.jpg")}
              style={styles.logo}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText1}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={handleEmailPress}>
          <Ionicons name="mail-outline" size={24} color="white" />
          <Text style={styles.buttonText1}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={handleEmailPress}>
          <Ionicons name="mail-outline" size={24} color="white" />
          <Text style={styles.buttonText1}>Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f9fafd",
    padding: 20,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 30,
    alignSelf: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  info: {
    marginBottom: 30,
  },
  infoHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 95,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#C8C8C8",
    padding: 10,
    borderRadius: 5,
    width: "34%",
    marginRight: 5,
    marginLeft: 5,
  },
  
  button1: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#C8C8C8",
    padding: 10,
    borderRadius: 5,
    width: "95%",
    marginLeft: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  buttonText1: {
    flexDirection: "row",
    color: "white",
    fontSize: 16,
  },
};

export default Schedule;
