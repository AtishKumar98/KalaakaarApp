import React, {useContext} from 'react';
import {Button, StyleSheet,TouchableOpacity, Image, Text, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
// import { Table, Row, Rows } from 'react-native-table-component';
// import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import {BASE_URL} from '../config';

const image_URL = "http://192.168.0.180:8005/"
const HomeScreen = ({navigation}) => {
  const {userInfo, isLoading, logout} = useContext(AuthContext);
  const photo= image_URL+userInfo.Image
  if (userInfo.Image == ''){
    const photo= image_URL+userInfo.Image
  }
  else{
    const photo = 'https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=826&t=st=1683469496~exp=1683470096~hmac=42b3c5b5391c73d196ba77f612a3439748faaa49ea50ec4140cc49b9f2b32a2f'
  }
  console.log(photo)

  return (
    <View style={styles.container}>
       {/* <DrawerContentScrollView {...props}>
      <View style={{ margin: 15 }}>
        <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold' }}>{myData.name}</Text>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>{myData.email}</Text>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>{myAccessToken.access_token}</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label='Logout' onPress={handleLogout} />
    </DrawerContentScrollView> */}
      <Spinner visible={isLoading} />
      <View style={styles.containerimage} >
      {photo && (
        <Image source={{ uri: photo }} style={styles.image} />
        )}
      <Text style={styles.welcome}>Welcome {userInfo.full_name}</Text>
        </View>
      <Text style={styles.welcome}>Phone Number: {userInfo.Phone_number}</Text>
      <Text style={styles.welcome}>Email ID: {userInfo.email}</Text>
      <Text style={styles.welcome}>Bussiness name: {userInfo.Bussiness_name}</Text>
      <Text style={styles.welcome}>City:  {userInfo.city}</Text>
      <Text style={styles.welcome}>Kalaakari:  {userInfo.choose_a_kalaakaar}</Text>
    
    <View style={styles.container2} >
      <Button  title="Log out" color="#F06EBE" onPress={logout}/>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F6F1F1',
    color:'#F6F1F1',
    marginTop:27,
    marginHorizontal:7,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container2: {
    flex: 1,
    width:'95%',
    marginHorizontal:7,
    // alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 28,
  },
  containerimage: {
    flex: 1,
    width:350,
    marginHorizontal:7,
    marginBottom: 43,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize:15,
    marginTop:7,
    color:'#000000',
    marginBottom: 2,
    padding:5,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical:20,
  },
  
  logout: {
    justifyContent: 'center',
    fontSize: 78,
    marginHorizontal:5,
    
    height: 200,
  },
});

export default HomeScreen;