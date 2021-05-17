import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Alert} from 'react-native'
import { useDispatch } from 'react-redux';
import Scanner from '../components/Scanner'
import { logOut } from '../store/user/actions';
import Locator from "./Locator"
import * as Location from 'expo-location';

const Separator = () => (
    <View style={styles.separator} />
  );

export default function Options() {
    const [locatorActive, setLocatorActive] = useState(false)
    const [scannerActive, setScannerActive] = useState(false)
    const [scanInBtn, setScanInBtn] = useState(true)
    const [scanOutBtn, setScanOutBtn] = useState(true)

    const dispatch = useDispatch()

    const onScan = () => {
        setScanInBtn(true)
        setScanOutBtn(true)
        setScannerActive(false)
        setLocatorActive(true)
    }

    return (
        <>
            <View>
                <Text style={styles.text}>
                    Scan QR code on Golf Kart to use it.
                </Text>
            </View>
            <Separator />
            {scanInBtn ? <Button style={styles.Btn}
                onPress={()=>{
                    setScannerActive(true)
                    setScanInBtn(false)
                    setScanOutBtn(false)
                    setLocatorActive(false)
                }}
                title='Scan In'
                color='darkslateblue'
            /> : null}
            <Separator />
            {scanOutBtn ? <Button style={styles.Btn}
                onPress={()=>{
                    setScannerActive(true)
                    setScanOutBtn(false)
                    setScanInBtn(false)
                    setLocatorActive(false)
                }}
                title='Scan out'
                color='darkslateblue'
            /> : null}
            <Separator />
            {scannerActive ? <Scanner onScan={onScan}/> : null}
            {locatorActive ? <Locator /> : null }
            <Separator />
            <Button style={styles.Btn}
                onPress={()=>{
                    dispatch(logOut())
                }}
                color='darkred'
                title='Logout'
            />

        </>
    )
}

const styles = StyleSheet.create({
    options:{
        justifyContent: 'center',
    },
    Btn:{
        marginTop: 30
    },
    separator:{
        marginVertical: 8,
    },
    text:{
        textAlign: 'center',
        marginVertical: 8,
        fontSize:27
    }
})