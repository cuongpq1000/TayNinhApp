import React, { useState, useEffect } from "react";
import {NativeBaseProvider, Text } from "native-base";
import {View, Image, StyleSheet, ScrollView, ActivityIndicator, useWindowDimensions, TouchableOpacity} from 'react-native';
import he from 'he';
import HTML from 'react-native-render-html';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { WebView } from 'react-native-webview';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export default function Detail({route, navigation}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { myParam } = route.params;
    const { width } = useWindowDimensions();
    const fetchData = () => {
        const data = myParam;
        setData(data);
        setLoading(false);
    }
    useEffect(() => {
        const dataInterval = setInterval(() => fetchData(), 1000);
        return () => clearInterval(dataInterval);
    }, []);

    return(
        <NativeBaseProvider>
            <ScrollView>
                <TouchableOpacity style={[styles.box, {marginTop: 70, marginLeft: 10}]} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faArrowLeft} color="#000000" size={24} />
                </TouchableOpacity>
            <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator}/>
            ) : (
                <>
                    <View>
                        <Image source={{ uri: data.thumb_url }} style={styles.image} />
                        <Text style={styles.title}>{he.decode(data.title.rendered)}</Text>
                        <HTML contentWidth={width} source={{ html: data.content.rendered }} />
                    </View>
                </>
            )}
            </View>
            {/* <WebView
            style={{ flex: 1 }}
            javaScriptEnabled={true}
            source={{ uri: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382741.0138848208!2d-122.4442908700561!3d37.75975968813838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9e292c71d7cb%3A0x8547f4f4a119a7a4!2sGolden+Gate+Bridge!5e0!3m2!1sen!2sus!4v1541150977484' }}
            /> */}
            </ScrollView> 
        </NativeBaseProvider>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingIndicator: {
      flex: 1,
      marginTop: 400
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    image: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      width: 415,
      height: 300,
      marginBottom: 20,
    },
  });
