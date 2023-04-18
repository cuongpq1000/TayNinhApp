import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, Text, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
function SplashScreen({ navigation }) {
  useEffect(() => {
    // Wait for 3 seconds and then navigate to the next screen
    setTimeout(() => {
      navigation.navigate('Bottom');
    }, 5000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <LottieView
        source={require('./assets/2523-loading.json')}
        autoPlay
        loop
      />
      <Text style={{
        position: 'absolute',
        height: 40,
        left: 100,
        top: 150,
      }}>Khám phá Trảng Bàng</Text>
    </View>
  );
}

export default SplashScreen;
