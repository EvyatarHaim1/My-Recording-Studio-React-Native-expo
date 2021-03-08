import React, { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet,  View } from 'react-native';
import { Button, Input, Image, Text } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {

    const [name, setName ] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [imageUrl, setimageUrl ] = useState("");

    useLayoutEffect(() => {
       navigation.setOptions({
            headerBackTitle: "Back to Login",
       });
    }, [navigation])

    const register = () => {
       auth.createUserWithEmailAndPassword(email, password)
       .then((authUser) => {
           console.log(authUser)
           authUser.user.updateProfile({
                displayName: name,
                photoURL: imageUrl || "https://www.pinclipart.com/picdir/middle/547-5475593_blank-person-avatar-clipart.png", 
           });
       }).catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>Create a LocaLive 🎸account </Text>
      
            <View style={styles.inputContainer}>
                <Input 
                     placeholder="Full Name"
                     autoFocus
                     type="text"
                     value={name}
                     onChangeText={(text) => setName(text)}
                />
                <Input 
                     placeholder="Email"
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
                />
                <Input 
                     placeholder="Profile Picture URL (optional)"
                     type="email"
                     value={imageUrl}
                     onChangeText={(text) => setimageUrl(text)}
                     onSubmitEditing={register}
                />

            </View>
            <Button containerStyle={styles.button}
                    raised 
                    onPress={register} 
                    title="Register" 
            />
           <View style={{height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       padding: 10, 
       backgroundColor: "white",
    },
    inputContainer:{
       width: 300,
    },
    button:{
       width: 200,
       marginTop: 10,
    }
})