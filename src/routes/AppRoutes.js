import React from 'react';
import { Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Habits from '../screens/Habits';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import habitIcon from '../assets/habits-icon.png';
import listIcon from '../assets/list-icons.png';

const Tab = createBottomTabNavigator();

const ListIcon = () => {
  return <Image source={listIcon} />;
};

const HabitIcon = () => {
  return <Image source={habitIcon} />;
}

export default function AppRoutes() {
  return (
    <NavigationContainer>
      {/* <ScrollView> */}
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => {
            let Icon = ListIcon;
    
            if (route.name === 'Habit') {
              Icon = HabitIcon;
            }
    
            return <Icon color={color} />;
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#A7A7A7',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Habit" component={Habits} />
      </Tab.Navigator>
      {/* </ScrollView> */}
    </NavigationContainer>
  );
}
