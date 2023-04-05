import React, { useState, useEffect } from "react";
import {NativeBaseProvider, Text } from "native-base";
import {View, Image, StyleSheet, ScrollView, ActivityIndicator, useWindowDimensions} from 'react-native';
import he from 'he';
import HTML from 'react-native-render-html';
export default function Detail({route}) {
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
        fetchData();
    }, []);

    return(
        <NativeBaseProvider>
            <ScrollView>
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
      marginTop: 50,
      width: 415,
      height: 300,
      marginBottom: 20,
    },
  });
