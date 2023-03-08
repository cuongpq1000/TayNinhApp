import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Discover from '../components/Discover';
import Event from '../components/Event';
import Home from '../components/Home';
import Schedule from '../components/Schedule';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
const tab = createBottomTabNavigator();

const BottomBar = () => {
    return (
        <tab.Navigator>
            <tab.Screen name="Home" 
            component={Home} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                )
            }}
            ></tab.Screen>
            <tab.Screen 
            name="Discover" 
            component={Discover}
            options={{
                tabBarLabel: 'Discover',
                tabBarIcon: ({color, size}) => (
                    <Entypo name="eye" color={color} size={size} />
                )
            }}
            ></tab.Screen>

            <tab.Screen 
            name="Event" 
            component={Event}
            options={{
                tabBarLabel: 'Event',
                tabBarIcon: ({color, size}) => (
                    <Entypo name="calendar" color={color} size={size} />
                )
            }}
            ></tab.Screen>

            <tab.Screen 
            name="Schedule" 
            component={Schedule}
            options={{
                tabBarLabel: 'Schedule',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
                )
            }}
            ></tab.Screen>
        </tab.Navigator>

    )
}

export default BottomBar;