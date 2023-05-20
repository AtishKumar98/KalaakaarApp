import React, { useState } from 'react';
import { View, TextInput, Button, Text, Switch, TouchableOpacity , StyleSheet,Picker  } from 'react-native';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import { Alert } from 'react-native';
// // import { Picker } from 'react-native-picker';
// import ImagePicker from 'react-native-image-picker';

const RegisterForm = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedValue(option);
    setIsOpen(false);
  };
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [imageUri, setImageUri] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'SR'},
    {label: 'Banana', value: 'banana'}
  ]);

  
  const [selectedLanguage, setSelectedLanguage] = useState('C');
  const [language]=useState(
    [
      'C',
      'Python',
      'Python',
      'Python',
      'JS',
    ].sort()
  )
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
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
    full_name: '',
    choose_a_kalaakaar: '',
    Bussiness_name: '',
    city: '',
    Pincode: '',
    Phone_number: '',
    is_agreed: true,
  });

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    axios.post('http://192.168.0.180:8005/api/register', formData)
      .then(response => {
        console.log('Registration successful', response.data);
        navigation.navigate('Login')
        Alert.alert('Registration successful'),[
          {
            text: 'OK ',
            onPress: () => navigation.navigate('Login'),
          }
        ]
      })
      .catch(error => {
        console.error('Registration failed', error);
        Alert.alert('Registration failed',error),[
          {
            text: 'OK ',
            onPress: () => navigation.navigate('Login'),
          }
        ]
        
      });
  };

  return (
    <View style={styles.container}>
    <View style={styles.wrapper}>
      <TextInput
      style={styles.input}
        placeholder="Email"
        onChangeText={value => handleInputChange('email', value)}
      />
      <TextInput
      style={styles.input}
        placeholder="Password"
        onChangeText={value => handleInputChange('password', value)}
        secureTextEntry
      />
      
      <TextInput
      style={styles.input}
        placeholder="Confirm Password"
        onChangeText={value => handleInputChange('password2', value)}
        secureTextEntry
      />
      <TextInput
      style={styles.input}
        placeholder="Full Name"
        onChangeText={value => handleInputChange('full_name', value)}
      />
      <TextInput
      style={styles.input}
        placeholder="Favorite Artist/Musician"
        onChangeText={value => handleInputChange('choose_a_kalaakaar', value)}
      />
       {/* <DropDownPicker
       style={styles.dropdown}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    /> */}
    <View>
      <TouchableOpacity onPress={toggleDropdown} >
        <Text style={styles.input}>{selectedValue || 'Select an option'}</Text>
      </TouchableOpacity>

      {isOpen && (
        <View>
          {options.map((option) => (
            <TouchableOpacity  style={styles.input}
              key={option}
              onPress={() => handleOptionSelect(option)}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
      <TextInput
      style={styles.input}
        placeholder="Business Name"
        onChangeText={value => handleInputChange('Bussiness_name', value)}
      />
      
      <TextInput
      style={styles.input}
        placeholder="City"
        onChangeText={value => handleInputChange('city', value)}
      />
      <TextInput
      style={styles.input}
        placeholder="Postal Code/Zip Code"
        onChangeText={value => handleInputChange('Pincode', value)}
      />
      <TextInput
      style={styles.input}
        placeholder="Phone Number"
        onChangeText={value => handleInputChange('Phone_number', value)}
      />
       <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
  
      <Button title="Submit" onPress={handleSubmit}  />
    </View>
    <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
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
    height:45,
    borderRadius: 15,
    paddingHorizontal: 14,
  },
  dropdown:{
    backgroundColor:"#F06EBE", 
    color:'#fff',
    zIndex:10,
  },
  link: {
    color: 'blue',
  },
});

export default RegisterForm;
