import React, { useState, useEffect ,useLayoutEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';
// import CustomListItem from '../components/CustomListItem';
import { Avatar, withTheme } from 'react-native-elements';
import { auth, db } from '../firebase';
import { TouchableOpacity } from 'react-native';
import { AntDesign, SimpleLineIcons, Feather} from '@expo/vector-icons';
import HomeOption from '../components/HomeOption/index';

const HomeScreen = ({ navigation }) => {

    const [chats, setChats ] = useState([]);

    const signOutUser = () => {
       auth.signOut().then(() => {
           navigation.replace('Login');
       });
    };

    // useEffect(() => {
    //     const unsubscribe = db.collection('chats')
    //          .onSnapshot((snapshot) => 
    //          setChats(
    //              snapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 data: doc.data(),
    //     }))
    //     ))
    //     return unsubscribe;
    // }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
             title: "LocaLive🎸",
             headerStyle : { backgroundColor: "#fff" },
             headerTitleStyle: { color: "black" },
             headerTintColor: "black",
             headerLeft: () => (
                 <View style={{ marginLeft: 20 }}>
                     <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                         <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
                     </TouchableOpacity>
                 </View>
             ),
             headerRight: () => (
                 <View 
                    style={{
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        width: 80,
                        marginRight: 20,
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Messages')} activeOpacity={0.5}>
                        <Feather name="message-square" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AddChat')} activeOpacity={0.5}>
                            <SimpleLineIcons name="pencil" size={24} color="black" />
                        </TouchableOpacity>
                 </View>
             ),
        });
     }, [navigation])

     const musicianIsexist = 
          db.collection('account').doc(auth.currentUser.email)
          .collection('musician').doc('1') ? ('Edit') : ('Create')

    const studioIsexist = 
          db.collection('account').doc(auth.currentUser.email)
          .collection('studio').doc('1') ? ('Edit') : ('Publish')
    //  const enterChat = (id, chatName) => {
    //      navigation.navigate('Chat', {
    //          id,
    //          chatName,
    //      });
    //  }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
            <HomeOption 
              navigation={navigation}
              backgroundImg={'https://www.thomann.de/blog/wp-content/uploads/2017/01/10-conseils-pour-devenir-musicien-pro.jpg'} 
              title={`${musicianIsexist} Musician Profile`}
              root='Musician Profile'
            />
            <HomeOption 
              navigation={navigation}
              backgroundImg={'https://www.thomann.de/blog/wp-content/uploads/2017/10/header-studio-quiz-v2.jpg'} 
              title={`${studioIsexist} your own studio`}
              root={'Publish Studios'}
            />
            <HomeOption 
              navigation={navigation}
              backgroundImg={'https://chordify.net/pages/wp-content/uploads/2018/12/Jingle_Jamming_chords-e1545055828555.jpg'} 
              title={'Search for local musicians'}
              root={'Search Musicians'}
            />
            <HomeOption 
              navigation={navigation}
              backgroundImg={'https://www.rupertneve.com/static/media/2018/06/FY9A1390-1800x1200.jpg'} 
              title={'Search for local studios'}
              root={'Search Studios'}
            />

                {/* {chats.map(({ id, data: { chatName }}) => (
                <CustomListItem 
                               key={id} 
                               id={id} 
                               chatName={chatName}
                               enterChat={enterChat}
                />
                ))} */}

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        height: '100%',
    },
})