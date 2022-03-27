import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, FlatList, Text, View, Image,TextInput, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function HomeScreen() {

  const [ waktu,setWaktu ]= useState("");
  const [ awal,setAwal ]= useState("");
  const [ tujuan,setTujuan ]= useState("");
  const [ pelayanan,setPelayanan ]= useState("");
  const [ tanggal,setTanggal ]= useState("");
  const navigation = useNavigation();
  
  return ( 
    <ScrollView>
    <View style={styles.container }>
   
      <View style= {styles.view1}>
      <Text style= {styles.view3}> Kapal X </Text>

  <Fumi
    label={'Pelabuhan Awal'}
    iconClass={FontAwesomeIcon}
    iconName={'ship'}
    iconColor={'#228f41'}
    iconSize={20}
    iconWidth={40}
    labelStyle={{color :'grey', }}
    inputPadding={20}
    inputStyle={{}}
    
    onChangeText={(value) => setAwal(value)}
       value={awal} style={styles.input}
  />
  <Fumi
    label={'Pelabuhan Tujuan'}
    iconClass={FontAwesomeIcon}
    iconName={'servicestack'}
    iconColor={'#228f41'}
    iconSize={20}
    iconWidth={40}
    labelStyle={{color :'grey', }}
    inputPadding={20}
    
    onChangeText={(value) => setTujuan(value)}
       value={tujuan} style={styles.input}
  />
  <Fumi
    label={'Pilih Layanan (executive/umum)'}
    iconClass={FontAwesomeIcon}
    iconName={'chair'}
    iconColor={'#228f41'}
    iconSize={20}
    iconWidth={40}
    labelStyle={{color :'grey', }}
    inputPadding={20}
    inputStyle={{}}
    
    onChangeText={(value) => setPelayanan(value)}
       value={pelayanan} style={styles.input}
  />
    <Fumi
    label={'Hari, Tanggal Bulan Tahun'}
    iconClass={FontAwesomeIcon}
    iconName={'calendar'}
    iconColor={'#228f41'}
    iconSize={20}
    iconWidth={40}
    labelStyle={{color :'grey', }}
    inputPadding={20}
    
    onChangeText={(value) => setTanggal(value)}
       value={tanggal} style={styles.input}
  />
    <Fumi
    label={'Masukan Waktu'}
    iconClass={FontAwesomeIcon}
    iconName={'clock'}
    iconColor={'#228f41'}
    iconSize={20}
    iconWidth={40}
    labelStyle={{color :'grey', }}
    inputPadding={20}
    inputStyle={{}}
    
    onChangeText={(value) => setWaktu(value)}
       value={waktu} style={styles.input}
  />

  <Text/>
    <Button title='Pesan' onPress={()=> 
        navigation.navigate('Pesanan', {awal ,tujuan, pelayanan, tanggal, waktu ,harga :65000})}></Button> 
      </View> 
    </View>
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

view1:{
    marginTop: 100,
    backgroundColor:'#92E3A9',
    borderRadius: 10,
    height:500,
    width:350,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1.5,
  },

view3:{
  color: 'white',
  fontSize : 30,
  fontWeight:'bold',
  marginBottom: 10,
  },

input:{
height:20,
borderRadius: 10,
width:320,
borderColor:'black',
borderWidth :1.5,
marginTop :5
 }
});