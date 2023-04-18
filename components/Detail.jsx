import React, { useState, useEffect } from "react";
import { NativeBaseProvider, Text } from "native-base";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,

  TouchableOpacity,
  Dimensions,
} from "react-native";
import he from "he";
import HTML, {HTMLSource} from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import IframeRenderer, { iframeModel } from '@native-html/iframe-plugin';
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
  const renderers = {
    iframe: IframeRenderer
  };
  const customHTMLElementModels = {
    iframe: iframeModel
  }
  const config = {
    WebView: WebView,
    customHTMLElementModels: {
      iframe: HTMLSource
    },
    renderers: {
      iframe: ({ src }) => (
        <WebView
          source={{ uri: src }}
          allowFullScreen={true}
          style={{ height: 200 }}
        />
      )
    }
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
      <ScrollView>
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
                <Image source={{ uri: data.thumb_url }} style={styles.image} />
                <Text style={styles.title}>
                  {he.decode(data.title.rendered)}
                </Text>
                <HTML
                  WebView={WebView}
                  contentWidth={width}
                  renderers={renderers}
                  source={{ html: data.content.rendered }}
                  customHTMLElementModels={customHTMLElementModels}
                  config={config}
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>
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
  loadingIndicator: {
    flex: 1,
    marginTop: 350,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
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
