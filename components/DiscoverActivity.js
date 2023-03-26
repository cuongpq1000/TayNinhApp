import React, { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";
import {View} from 'react-native';
import Card from '../components/card';

export default function DiscoverActivity({route}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { myParam } = route.params;

  const fetchData = async () => {
    const resp = await fetch(`${myParam}`);
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    const dataInterval = setInterval(() => fetchData(), 5 * 1000);
    return () => clearInterval(dataInterval);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
        <Text>Pham</Text>
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        {loading && <Box>Loading..</Box>}
        {data.map((item) => (
        <View key={item.id}>
          <Card myProp={item}></Card>
        </View>
        ))}
      </Center>
    </NativeBaseProvider>
  );
}
