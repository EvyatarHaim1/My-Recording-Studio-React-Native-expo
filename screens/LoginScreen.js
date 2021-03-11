import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView,Keyboard, StyleSheet, View, Text } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {

   const [ email, setEmail ] = useState("");
   const [ password, setPassword ] = useState("");

   useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if(authUser){
              navigation.replace('Home');
          }
      });

      return unsubscribe;
      
   },[])

   const signIn = () => {
      Keyboard.dismiss();
      auth.signInWithEmailAndPassword(email, password)
          .catch(error => alert(error));
   };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
           <Image resizeMode="contain"
           source={{
               uri: "https://www.thomann.de/blog/wp-content/uploads/2017/10/header-studio-quiz-v2.jpg",
           }} 
               style={{ width: 200, height: 200 }}
           />
           <View style={styles.inputContainer}>
                <Input 
                     placeholder="Email" 
                     autoFocus 
                     type="email" 
                     value={email}
                     onChangeText={(text) => setEmail(text)}
                     />
                <Input 
                     placeholder="Password" 
                     secureTextEntry 
                     type="password" 
                     value={password}
                     onChangeText={(text) => setPassword(text)}
                     onSubmitEditing={signIn}
                     />
           </View>

           <Button containerStyle={styles.button} title="Login" onPress={signIn} />
           <Button containerStyle={styles.button} type="outline" title="Register" onPress={() => navigation.navigate('Register')} />
           <View style={{height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      backgroundColor: "white",
    },
    inputContainer:{
      width: 300,
    },
    button:{
       width: 200,
       marginTop: 10
    },
    
});