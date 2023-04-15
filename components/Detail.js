import React, { useState, useEffect } from "react";
import {NativeBaseProvider, Text } from "native-base";
import {View, Image, StyleSheet, ScrollView, ActivityIndicator, useWindowDimensions, TouchableOpacity} from 'react-native';
import he from 'he';
import LottieView from 'lottie-react-native';
import HTML from 'react-native-render-html';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
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
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <LottieView
                    source={require('../assets/97201-loading-screen.json')}
                    autoPlay
                    loop
                    />
                    <Text>Cuong</Text>
                </View>
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
