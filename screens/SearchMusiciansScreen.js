import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { db, auth } from '../firebase';
import firebase from 'firebase';
import Button from '../components/StyledButton/index';
import styles from '../components/StyledButton/styles';
import { useSelector, useDispatch } from 'react-redux';

const SearchMusiciansScreen = () => {
   
    const [ musiciansList, setMusiciansList ] = useState([]);
    const Reduxmusicians = useSelector(state => state.musicians);
    const dispatch = useDispatch();

    useEffect(() => {
       const musicians = db.collection('accounts')
       .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => setMusiciansList(
            snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data().musician,
            }))
            ) )
            console.log(musiciansList)
    //    .onSnapshot((snapshot) => (
    //      snapshot.docs.map((doc) => setMusiciansList({
    //                 address: doc.data().address,
    //                 education:  doc.data().education,
    //                 gender: doc.data().gender, 
    //                 genre: doc.data().genre, 
    //                 instruments: doc.data().instruments, 
    //                 photoURL: doc.data().photoURL, 
    //                 purpose: doc.data().purpose, 
             
    //      }))
    //    ))
    }, [])

    const chooseMusician = () => {
        dispatch({ type: 'CHOOSE_USER', payload: 'Yanisita' })
    }

    return (
        <View>
            <ul>
            { Reduxmusicians.map(musician => <li key={musician}>{musician}</li>) }
            </ul>
            <Button containerStyle={styles.button} title="Login" onPress={chooseMusician} />
        </View>
    )
}

export default SearchMusiciansScreen
