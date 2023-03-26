import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { LogBox} from 'react-native';
import BottomBar from './Bottom/BottomBar';
import DiscoverActivity from './components/DiscoverActivity';
LogBox.ignoreAllLogs();
const stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <stack.Screen name="Bottom" component={BottomBar}></stack.Screen>
          <stack.Screen name="DiscoverActivity" component={DiscoverActivity} />
        </stack.Navigator>
      </NavigationContainer>
    );
}