import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Component/Navigation';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthProvider>
      <Navigation/>
      </AuthProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
