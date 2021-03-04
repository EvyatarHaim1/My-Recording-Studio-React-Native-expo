import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/index';

const StudioItem = ({ studio }) => {
    return (
   <View style={styles.studioContainer}>
      <ImageBackground 
        source={studio.image}
        style={styles.image}
        />
    <View style={styles.titles}>
        <Text style={styles.title}> {studio.name} </Text>
        <Text style={styles.subtitle}> {studio.price} </Text>
    </View>

    <View style={styles.buttonContainer}> 
       <StyledButton 
          type="primary" 
          content="Check availability" 
          onPress={() => {
            console.warn( "custom order was pressed");
          }} 
       />
    </View>
  </View>

    )
}

export default StudioItem;