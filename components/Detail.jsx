import React, { useState, useEffect } from "react";
import { NativeBaseProvider, Text } from "native-base";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import he from "he";
import {useWindowDimensions} from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import WebView from 'react-native-webview';
export default function Detail({ route, navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { myParam } = route.params;
  const width = useWindowDimensions().width;

  const fetchData = () => {
    const data = myParam;
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    const dataInterval = setInterval(() => fetchData(), 2000);
    return () => clearInterval(dataInterval);
  }, []);
  return (
    <NativeBaseProvider>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faArrowLeft} color="#000000" size={24} />
        </TouchableOpacity>
      </View>

        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator
              size="large"
              color="#0000ff"
              style={styles.loadingIndicator}
            />
          ) : (
            <>
              <View>
                <WebView
                WebView={WebView}
                contentWidth={width}
                style={{ height: 1200, width: 410, backgroundColor: "#C8C8C8" }}
                source={{
                  html: data.content.rendered
                }}
              />
              </View>
            </>
          )}
        </View>

    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 100,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingHorizontal: 16,
  },
  backButton: {
    marginTop: 30,
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    width: 415,
    height: 300,
    marginBottom: 20,
  },
});
