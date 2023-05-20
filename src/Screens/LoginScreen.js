import React, {useContext ,useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
 
  StyleSheet,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, login} = useContext(AuthContext);
  const handleSubmit = async () => {
    const token = await login(email, password);
    if (token) {
              // Store the token in local storage or state
              // Redirect the user to the home screen
              navigation.navigate('Home');
            }
      };

  
  return (
    <View style={styles.container}>
     
      <ImageBackground
        style={styles.image}
        source={{ uri: "https://kalaakaar.co/static/images/Business-logo.png" }}
      >
        {/* Add other components and content here */}
      </ImageBackground>
       
      <Spinner visible={isLoading} />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <Button
          title="Login" color="#F06EBE" 
          onPress={() => {
            handleSubmit(email, password);
          }}


        />
       

        

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  image: {
    width: 200,
    height: 150,
  
    marginVertical:20,
  },
  
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    height:45,
    borderRadius: 15,
    paddingHorizontal: 14,
  },
  link: {
    color:"#19A7CE" 
  },
});

export default LoginScreen;