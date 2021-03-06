import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { sendLocation } from '../store/location/actions'
import * as Location from 'expo-location';
import { useDispatch } from 'react-redux';


export default function Locator() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      dispatch(sendLocation(location))
    })();
  }, []);

  if (errorMsg) {
    text = errorMsg;
  }

  return (
    <View style={styles.container}>
      {location ? <Text style={styles.paragraph}>{`Your Lat is ${location.coords.latitude} and Long is ${location.coords.longitude}`}</Text> :null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});