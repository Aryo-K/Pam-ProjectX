import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LainnyaScreen() {
  const navigation = useNavigation();  
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://img.freepik.com/free-vector/man-thinking-concept-illustration_114360-7920.jpg?t=st=1648290281~exp=1648290881~hmac=8f2486507f2e5afa71a2a26a5bd77705f799988220aa315697d41c74c25b0f1f&w=740' }} 
      style={{width:400, height:400}}></Image>
      <Text>Under Maintenance</Text>
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
