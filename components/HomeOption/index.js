import React, {useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const HomeOption = ({ navigation, backgroundImg, title, root }) => {


    return (
      // <View>
          <TouchableOpacity onPress={() => navigation.navigate(root)} activeOpacity={0.5}>
            <ImageBackground 
              source={backgroundImg} 
              style={styles.image}>
              <Text style={styles.optionText}>{title}</Text>
            </ImageBackground>
          </TouchableOpacity>
      // </View>
    )
}

export default HomeOption;

const styles = StyleSheet.create({
  container:{
      height: '100%',
  },
  image:{
      width: '100vw',
      height: '25vh',
      opacity: 0.8,
  },
  optionText:{
      color: 'white',
      fontWeight: '700',
      marginTop: '20%',
      fontSize: 22,
      paddingLeft: '20vw',
  }
})