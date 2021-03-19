import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, TextInput,Keyboard } from 'react-native';
import styles from '../components/StyledButton/styles';
import { Button } from 'react-native-elements';
import { db, auth } from '../firebase';
import firebase from 'firebase';

const MusicianProfileScreen = ({ navigation, route }) => {

   const [ instruments, setInstruments ] = useState("");
   const [ gender, setGender ] = useState("");
   const [ address, setAddress ] = useState("");
   const [ genre, setGenre ] = useState("");
   const [ purpose, setPurpose ] = useState("");
   const [ education, setEducation ] = useState("");

   useEffect(() => {
    db.collection('accounts').doc(auth.currentUser.email).collection('musician')
    .onSnapshot((snapshot) => snapshot.docs.map(doc => (
          setInstruments(doc.data().instruments),
          setGender(doc.data().gender),
          setAddress(doc.data().address),
          setGenre(doc.data().genre),
          setPurpose(doc.data().purpose),
          setEducation(doc.data().education)
    )))
   }, [])

   useLayoutEffect(() => {
    navigation.setOptions({ 
       title: "Edit Your Musician Profile",
       headerBackTitle: "Musician-Profile",
    });
}, [navigation]);

   const submit = () => {
     Keyboard.dismiss();
       db.collection('accounts').doc(auth.currentUser.email).collection('musician').doc('1')
                               .set({
           instruments: instruments,
           gender: gender,
           address: address,
           genre: genre,
           purpose: purpose,
           education: education,
           photoURL: auth.currentUser.photoURL,
           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         })
      .catch((error) => alert(error.message));
         navigation.navigate('Home')
     }

    return (
      <>
        <View>
            <TextInput 
             placeholder={instruments? instruments: "Instrument" }
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setInstruments(text)}
             value={instruments}
           /> 
           <TextInput 
             placeholder={gender? gender: "Gender" }
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setGender(text)}
             value={gender}
           /> 
           <TextInput 
             placeholder={address? address: "Address" }
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setAddress(text)}
             value={address}
           /> 
           <TextInput 
             placeholder={genre? genre: "Genre" }
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setGenre(text)}
             value={genre}
           /> 
           <TextInput 
             placeholder={purpose ? purpose :"Purpose - Jam, Recording-Session"}
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setPurpose(text)}
             value={purpose}
           /> 
           <TextInput 
             placeholder={education? education :"Education\Level - Beginner, Intermediate, Pro"}
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setEducation(text)}
             value={education}
           /> 
        </View>
        <View style={{height: '40%'}}></View>
        <View>
            <Button containerStyle={styles.button} title="Submit"  
                    style={{width: '150pt'}}
                    onPress={ submit } 
            />
        </View>
           
      </>
    )
}

export default MusicianProfileScreen;
