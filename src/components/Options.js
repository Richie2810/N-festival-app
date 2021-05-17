import React, { useState} from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Scanner from '../components/Scanner'
import { logOut } from '../store/user/actions';
import Locator from "./Locator"
import { selectUser } from '../store/user/selectors';
import { geoLocation } from '../store/location/selectors'
import { theTracker } from '../store/tracking/selectors'

const Separator = () => (
    <View style={styles.separator} />
  );

export default function Options() {
    const [locatorActive, setLocatorActive] = useState(false)
    const [scannerActive, setScannerActive] = useState(false)
    const [scanInBtn, setScanInBtn] = useState(true)
    const [scanOutBtn, setScanOutBtn] = useState(true)

    const user = useSelector(selectUser)
    const tracker = useSelector(theTracker)
    const locator = useSelector(geoLocation)

    const dispatch = useDispatch()

    const onScan = (data) => {
        setScanInBtn(true)
        setScanOutBtn(true)
        setScannerActive(false)
        setLocatorActive(true)
        console.log(user.id, data, locator.location.coords.longitude, locator.location.coords.latitude)
        // tracker 
        //     ? dispatch(startTracking(user, data, location))
        //     : dispatch(stopTracker())
        // console.log(tracking)
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
            <Locator />
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