import React, { useState, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import he from "he";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { WebView } from "react-native-webview";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Detail({ route, navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { myParam } = route.params;
  // const fetchData = () => {
  //   const data = myParam;
  //   setData(data);
  //   const htmlContent = data.content.rendered;
  //   setHtml(htmlContent);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   const dataInterval = setInterval(() => fetchData(), 2000);
  //   return () => clearInterval(dataInterval);
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#FFFFFF' }}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faArrowLeft} color="#000000" size={24} />
        </TouchableOpacity>
      </View>
      <WebView
        style={styles.webView}
        originWhitelist={["*"]}
        source={{ html: myParam.content.rendered }}
      />
    </SafeAreaView>
    // <Text>{myParam.content.rendered}</Text>
    // <View style={{ flex: 1 }}>
    //   <View style={styles.topBar}>
    //     <TouchableOpacity
    //       style={styles.backButton}
    //       onPress={() => navigation.goBack()}
    //     >
    //       <FontAwesomeIcon icon={faArrowLeft} color="#000000" size={24} />
    //     </TouchableOpacity>
    //   </View>
    /* <View style={styles.container}> */
    /* {loading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loadingIndicator}
          />
        ) : (
          <View>
            <Text>{myParam.content.rendered}</Text>
            <Image source={{ uri: data.thumb_url }} style={styles.image} />
            <Text style={styles.title}>{he.decode(data.title.rendered)}</Text>
          </View>
        
        )} */
    /* </View> */
    // </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingHorizontal: 16,
    marginBottom: 10
  },
  webView: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  title1: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 10,
  },
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  loadingIndicator: {
    flex: 1,
    marginTop: 400,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: 415,
    height: 200,
    marginBottom: 20,
  },
});
