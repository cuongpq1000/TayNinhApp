import {View, Image, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Text} from 'react-native';
import he from 'he';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function DiscoverActivity({route, navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { myParam } = route.params;

  const fetchData = async () => {
    const resp = await fetch(`${myParam}`);
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  function sendData(data) {
    navigation.navigate('Detail', { myParam: data})
  }

  useEffect(() => {
    const dataInterval = setInterval(() => fetchData(), 5 * 1000);
    return () => clearInterval(dataInterval);
  }, []);

  return (
  <View style={styles.container}>
    <ScrollView style={{ flex: 1, marginTop: 50}}>
    {loading ? (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator}/>
        ) : (
          <>
            {data.map((item) => (
              <View key={item.id} >
                <TouchableOpacity style={styles.card} onPress={() => sendData(item)}>
                  <Image source={{ uri: item.thumb_url }} style={styles.image} />
                  <Text style={styles.title}>{he.decode(item.title.rendered)}</Text>
                  <Text style={{fontsize: 1}}>{he.decode(item.excerpt.rendered).replaceAll('<p>', '').replaceAll('</p>', '')}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </>
        )}
    </ScrollView>
    <TouchableOpacity style={[styles.box, {position: 'absolute', zIndex: 1, marginTop: 50, marginLeft: 10}]} onPress={() => navigation.goBack()}>
      <FontAwesomeIcon icon={faArrowLeft} color="#000000" size={24} />
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingIndicator: {
    flex: 1,
    marginTop: 400
  },
  card: {
    marginTop: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  image: {
    marginTop: 10,
    borderRadius: 10,
    width: 350,
    height: 200,
    marginBottom: 20,
  },
});
