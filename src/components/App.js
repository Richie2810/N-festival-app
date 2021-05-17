import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Header from './src/components/Header.js'
import { NavigationContainer } from "@react-navigation/native"
//import * as Location  from 'expo-location'
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios'
import {apiUrl} from './constants'
import { ScreenContainer } from 'react-native-screens';
import Login from './src/components/Login';
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./src/store";
import { selectUser } from "./src/store/user/selectors";
import Options from './src/components/Options'
import Test from './src/components/Test'


function App() {
  const user = useSelector(selectUser)

  return (
    <View>
      <Header />
      <Test />
      {/* {user.token === null ? <Login /> : <Options />} */}
    </View>
  )
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}