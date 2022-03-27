import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import PesananScreen from './src/screen/PesananScreen';
import PembatalanScreen from './src/screen/PembatalanScreen';
import LainnyaScreen from './src/screen/LainnyaScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  
  return (

    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name = "Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name = "Pesanan" component={PesananScreen}></Tab.Screen>
      <Tab.Screen name = "Pembatalan" component={PembatalanScreen}></Tab.Screen>
      <Tab.Screen name = "Lainnya" component={LainnyaScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
