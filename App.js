import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './navigation/authnavigation';
import { ImagePicker } from 'expo-image-picker';


export default function App() {
  return (
    <NavigationContainer>
  <AuthNavigation/>
    </NavigationContainer>
  );
}

