import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ myProp }) => {
  return (
    <View style={styles.card}>
        <Image source={{ uri: myProp.thump_url }} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.title}>{myProp.title.rendered}</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nulla ac nibh eleifend pretium.</Text>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({

  card: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    height: 150,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
  },
  image: {
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    marginTop: 20,
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Card;