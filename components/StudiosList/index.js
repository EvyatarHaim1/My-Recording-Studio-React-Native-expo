import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import styles from './styles'
import studios from './studios'; 
import StudioItem from '../StudioItem';

const StudiosList = (props) => {


    return (
        <View style={styles.container}>
        <FlatList 
             data={studios}
             renderItem={({item}) => <StudioItem studio={item} />}
             snapToAlignment={'start'}
             decelerationRate={'fast'}
             snapToInterval={Dimensions.get('window').height}
             showsVerticalScrollIndicator={false}
        />
       
    </View>
    )
}

export default StudiosList;

