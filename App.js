import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import MusicianProfileScreen from './screens/MusicianProfileScreen';
import PublishStudioScreen from './screens/PublishStudioScreen';
import SearchMusiciansScreen from './screens/SearchMusiciansScreen';
import SearchStudiosScreen from './screens/SearchStudiosScreen';
import AddChatScreen from './screens/AddChatScreen';
import ChatScreen from './screens/ChatScreen';
import Messages from './screens/Messages';
import { Provider } from 'react-redux';
import { store } from './redux/app-redux';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: '#2c6bed'},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
  
};

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer style={styles.container}>
    <Stack.Navigator 
       screenOptions={globalScreenOptions}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} /> 
    <Stack.Screen name="Home" component={HomeScreen} /> 
    <Stack.Screen name="Musician Profile" component={MusicianProfileScreen} /> 
    <Stack.Screen name="Publish Studios" component={PublishStudioScreen} /> 
    <Stack.Screen name="Search Musicians" component={SearchMusiciansScreen} /> 
    <Stack.Screen name="Search Studios" component={SearchStudiosScreen} /> 

    <Stack.Screen name="AddChat" component={AddChatScreen} />
    <Stack.Screen name="Messages" component={Messages} />
    <Stack.Screen name="Chat" component={ChatScreen} /> 
    </Stack.Navigator>
  </NavigationContainer>
     {/* <View >
       <StudiosList />
       <StatusBar style="auto" />
     </View> */}
    </Provider>
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
