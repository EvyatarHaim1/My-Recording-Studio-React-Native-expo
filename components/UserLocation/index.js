import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Location, Permissions } from 'expo';

const UserLocation = () => {

    const [errorMessage, setErrorMessage ] = useState("");
    const [location, setLocation ] = useState("");

    useEffect(() => {
       getLocation()
    },[])

    const getLocation = async() => {
       const { status } = await Permissions.askAsync(Permissions.Location);

       if (status !== 'granted'){
           console.log('Permission not granted');
           setErrorMessage('Permission not granted')
       }

       const userLocation = await Location.getCurrentPositionAsync();
       setLocation(userLocation);
    }

    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default UserLocation;
