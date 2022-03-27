import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//Screen
import HomeScreen from './screen/HomeScreen';
import PesananScreen from './screen/PesananScreen';
import PembatalanScreen from './screen/PembatalanScreen';
import LainnyaScreen from './screen/LainnyaScreen';

//Screen Name
const homeName = 'Home'
const pesananName = 'Pesanan'
const pembatalanName = 'Pembatalan'
const lainnyaName = 'Lainnya'

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
 
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline' 
                    } else if (rn === pesananName) {
                        iconName = focused ? 'circle' : 'circle-outline'
                    } else if ( rn === pembatalanName) {
                        iconName = focused ? 'circle' : 'circle-outline'
                    } else if ( rn === lainnyaName) {
                        iconName = focused ? 'circle' : 'circle-outline'
                    }

                    return<Ionicons name={iconName} size={size} color={color}/>

                }
            }) }>

      <Tab.Screen name = {homeName} component={HomeScreen}/>
      <Tab.Screen name = {pesananName} component={PesananScreen}/>
      <Tab.Screen name = {pembatalanName} component={PembatalanScreen}/>
      <Tab.Screen name = {lainnyaName} component={LainnyaScreen}/>


            </Tab.Navigator>
        </NavigationContainer>
    )
}