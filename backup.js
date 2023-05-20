import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
  StyleSheet,
  Alert,
  // CheckBox
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckBox } from 'react-native-elements'
// import CheckBox from 'react-native-check-box'
// import {CheckBox} from '@react-native-community/checkbox';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

const RegisterScreen = ({navigation}) => {
  createThreeButtonAlert = () =>
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Ask me later',
      onPress: () => console.log('Ask me later pressed'),
    },
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
  const [full_name, setName] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  const [email, setEmail] = useState(null);
  const [Phone_number, setPhone_number] = useState(null);
  const [city, setCity] = useState(null);
  const [Pincode, setPincode] = useState(null);
  const [password, setPassword1] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [choose_a_kalaakaar, setchoose_a_kalaakaar] = useState(null);
  // const [is_agreed, setSelection] = useState(true);
  const [isSelected, setSelection] = useState(false);
  
  const {isLoading, Register} = useContext(AuthContext);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={full_name}
          placeholder="Enter name"
          onChangeText={text => setName(text)}
        />

        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          value={city}
          placeholder="Enter City"
          onChangeText={text => setCity(text)}
        />
        <TextInput
          style={styles.input}
          value={Pincode}
          placeholder="Enter Pincode"
          onChangeText={text => setPincode(text)}
        />
        <TextInput
          style={styles.input}
          value={Phone_number}
          placeholder="Enter Phone_number"
          onChangeText={text => setPhone_number(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword1(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          value={password2}
          placeholder="Confirm password"
          onChangeText={text => setPassword2(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          value={choose_a_kalaakaar}
          placeholder="Select kalaakaar"
          onChangeText={text => setchoose_a_kalaakaar(text)}
        />
         <Button title={'Police'} onPress={this.createThreeButtonAlert} />
         <DropDownPicker
          style={styles.input}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
       <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>

        <Button
          title="Register"
          onPress={() => {
            Register(full_name, email, password,password2,Phone_number,city,Pincode);
          }}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
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
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    height:40,
    borderRadius: 15,
    paddingHorizontal: 14,
  },
  label: {
    margin: 8,
  },
  link: {
    color: 'blue',
  },
});

export default RegisterScreen;