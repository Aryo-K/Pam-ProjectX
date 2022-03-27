import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PembatalanScreen() {
  const navigation = useNavigation();  
  return (

    <View style={styles.container}>
          <Image source={{ uri: 'https://img.freepik.com/free-vector/cancel-concept-illustration_114360-3620.jpg?w=740' }} 
          style={{width:400, height:400}}></Image>
          <Text>Tidak Ada Pembatalan Pesanan</Text>
          <StatusBar style="auto" />
    </View>
    
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
