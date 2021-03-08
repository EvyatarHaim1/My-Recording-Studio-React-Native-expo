import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AddChatScreen from './screens/AddChatScreen';
import ChatScreen from './screens/ChatScreen';

// import StudiosList from './components/StudiosList/index';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: '#2c6bed'},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
  
};

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
    <Stack.Navigator 
       screenOptions={globalScreenOptions}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} /> 
    <Stack.Screen name="Home" component={HomeScreen} /> 
    <Stack.Screen name="AddChat" component={AddChatScreen} />
    <Stack.Screen name="Chat" component={ChatScreen} /> 
    </Stack.Navigator>
  </NavigationContainer>
    // <View >
    //    <StudiosList />
    //   <StatusBar style="auto" />
    // </View>
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
