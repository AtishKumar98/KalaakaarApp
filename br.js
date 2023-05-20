import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, } from 'react-native';
import axios from 'axios';
import { Alert } from 'react-native';

const RegisterForm = () => {
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
    is_agreed: false,
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
      })
      .catch(error => {
        console.error('Registration failed', error);
        Alert
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
      <Button title="Submit" onPress={handleSubmit} />
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
  link: {
    color: 'blue',
  },
});

export default RegisterForm;
