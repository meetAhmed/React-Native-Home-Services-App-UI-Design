import React, { lazy } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from 'react-native';

// local 
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../utils/Colors';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.PRIMARY
        }}>
            <Tab.Screen name="Login" component={LoginScreen} options={{
                tabBarLabel: ({ color }) => (
                    AppTabLabel(label = { color: color, title: 'Login' })
                ),
                tabBarIcon: ({ color, size }) => (
                    AppTabIcon(icon = { name: "login", size: size, color: color })
                )
            }} />
            <Tab.Screen name="Home" component={HomeNavigation} options={{
                tabBarLabel: ({ color }) => (
                    AppTabLabel(label = { color: color, title: 'Home' })
                ),
                tabBarIcon: ({ color, size }) => (
                    AppTabIcon(icon = { name: "home", size: size, color: color })
                )
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarLabel: ({ color }) => (
                    AppTabLabel(label = { color: color, title: 'Profile' })
                ),
                tabBarIcon: ({ color, size }) => (
                    AppTabIcon(icon = { name: "person", size: size, color: color })
                )
            }} />
        </Tab.Navigator>
    );
}

const AppTabLabel = (label) => {
    return (
        <Text style={{ color: label.color, fontSize: 12, marginTop: -7 }}>{label.title}</Text>
    );
}

const AppTabIcon = (icon) => {
    return (
        <MaterialIcons name={icon.name} size={icon.size} color={icon.color} />
    );
}