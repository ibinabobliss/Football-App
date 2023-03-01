import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View ,Text} from "react-native"
import {MaterialCommunityIcons} from "@expo/vector-icons"


function HomeScreen() {
  return (
<View>

  <Text>

  </Text>
</View>
 );
}
 
function SettingsScreen() {
  return (
    <View>
      
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
      <Tab.Navigator 
      screenOptions={{tabBarActiveBackgroundColor:"tomato",
      tabBarActiveTintColor:"white",
      tabBarInactiveBackgroundColor:"#eee",
      tabBarInactiveTintColor:"black"}}  >
        <Tab.Screen name="READY PLAYER" component={HomeScreen} 
         options={{tabBarIcon:({size,color})=><MaterialCommunityIcons name='home' size={size} color={color}/>,
         headerStyle: {
          backgroundColor: 'tomato',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
         }} />
       
        <Tab.Screen name="Settings" component={SettingsScreen} 
        options={{tabBarIcon:({size,color})=><MaterialCommunityIcons name='menu' size={size} color={color}/>}} />
      </Tab.Navigator>
  );
}
