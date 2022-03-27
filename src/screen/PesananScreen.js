import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PesananScreen({ route }) {
  const simpleAlert = () => {
    alert('Pesanan Anda Sedang di Proses');
  }
  const navigation = useNavigation();  
  const { awal, tanggal, pelayanan, waktu, harga, tujuan } = route.params;
  return ( 

      <View style={styles.container}>

        <View style= {styles.view1}>
        <Text style= {styles.view3}>                 Kapal X </Text>
        <Text style= {styles.view4}>   Kuota Tersedia (1000)</Text>
        <Text style= {styles.view4}>   Rincian Tiket</Text>
        <Text> </Text>

        <View style= {styles.view2}>
        <Text style= {styles.view5}>                 {awal}   -   {tujuan}</Text>
        <Text style= {styles.view6}>Jadwal Masuk Pelabuhan</Text>
        <Text>   {tanggal}</Text>
        <Text>   {waktu} WIB</Text>
        <Text style= {styles.view6}>Layanan</Text>
        <Text>   {pelayanan}</Text>
        <Text>   _____________________________________________</Text>
        <Text style= {styles.view4}>Dewasa x 1                                         {harga}</Text>   
        </View>

        <Text style= {styles.view4}>   Total                                                 Rp. {harga}</Text>

        <Button title='Konfirmasi' onPress={simpleAlert}/>
      </View>
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

  Button:{
    borderRadius: 20,
  },

  view1:{
    marginTop: 0,
    backgroundColor:'#92E3A9',
    borderRadius: 10,
    height:550,
    width:350,
    borderColor:'black',
    borderWidth:1.5
  },

  view2:{
    backgroundColor:'white',
    marginBottom:10,
    fontSize : 20,
    borderColor:'black',
    borderWidth:1,
    marginLeft: 10,
    marginRight:10,
    borderRadius: 10
  },

  view3:{
    color: 'white',
    fontSize : 30,
    fontWeight:'bold',
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center'
    },

  view4:{
    fontSize : 16,
    marginLeft:10,
    marginBottom:10,
    marginTop:10
  },
  
  view5:{
    fontSize:20,
    marginLeft:10,
    marginTop:10,
    marginBottom:10,
    fontWeight:'normal'
  },

  view6:{
    fontSize:16,
    marginLeft:10,
    marginTop:10,
    marginBottom:10,
    fontWeight:'bold'
  }


});
