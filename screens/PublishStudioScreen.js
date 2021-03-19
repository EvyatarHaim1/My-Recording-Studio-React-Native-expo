import React,{ useState, useEffect } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../components/StyledButton/styles';
import { db, auth } from '../firebase';
import firebase from 'firebase';

const PublishStudioScreen = ({navigation, route}) => {

    const [ owner, setOwner] = useState('');
    const [phone, setPhone ] = useState('');
    const [email, setEmail ] = useState('');
    const [ mixers, setMixers ] = useState('');
   const [ mics, setMics ] = useState('');
   const [ instruments, setInstruments ] = useState('');
   const [ technician, setTechnician ] = useState("");
   const [ price, setPrice ] = useState("");
   const [ image, setImage ] = useState("");
   const [ address, setAddress ] = useState("");
   const [ hours, setHours] = useState('');

   const submit = () => {
    // Keyboard.dismiss();
      db.collection('accounts').doc(auth.currentUser.email).collection('studio').doc('1')
                              .set({
          owner: owner,
          ownerImage: auth.currentUser.photoURL,
          phone: phone,
          email: email,
          mixers: mixers,
          mics: mics,
          instruments: instruments,
          technician: technician,
          price: price,
          image: image,
          address: address,
          hours: hours,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
     .catch((error) => alert(error.message));
        navigation.navigate('Home')
    }

    return (
    <View>
        <View>
            <TextInput 
             placeholder={owner? owner: "Owner" }
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setOwner(text)}
             value={owner}
           /> 
            <TextInput 
             placeholder={phone? phone: "Phone" }
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setPhone(text)}
             value={phone}
           /> 
            <TextInput 
             placeholder={email? email: "Email" }
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setEmail(text)}
             value={email}
           /> 
            <TextInput 
             placeholder={mixers? mixers: "Mixers" }
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setMixers(text)}
             value={mixers}
           /> 
            <TextInput 
             placeholder={mics? mics: "Microphones" }
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setMics(text)}
             value={mics}
           />  <TextInput 
             placeholder={instruments? instruments: "Instrument" }
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setInstruments(text)}
             value={instruments}
           /> 
            <TextInput 
             placeholder={technician? technician: "Technician" }
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setTechnician(text)}
             value={technician}
           /> 
            <TextInput 
             placeholder={price? price: "Price" }
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setPrice(text)}
             value={price}
           /> 
            <TextInput 
             placeholder={image? image: "Image URL" }
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setImage(text)}
             value={image}
           /> 
            <TextInput 
             placeholder={address? address: "Address" }
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setAddress(text)}
             value={address}
           /> 
            <TextInput 
             placeholder={hours? hours: "Hours" }
             style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }}
             onChangeText={text => setHours(text)}
             value={hours}
           /> 
           
        </View>
        {/* <View style={{height: '5%'}}></View> */}
        <View>
            <Button containerStyle={styles.button} title="Submit"  
                    style={{width: '150pt'}}
                    onPress={ submit } 
            />
        </View>
    </View>
    )
}

export default PublishStudioScreen;
