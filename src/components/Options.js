import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, Alert} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Scanner from '../components/Scanner'
const Separator = () => (
    <View style={styles.separator} />
  );

export default function Options() {
    const [scannerActive, setScannerActive] = useState(false)
    const [scanInBtn, setScanInBtn] = useState(true)
    const [scanOutBtn, setScanOutBtn] = useState(false)

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
                }}
                title='Scan In'
                color='darkslateblue'
            /> : null}
            <Separator />
            {scanOutBtn ? <Button style={styles.Btn}
                onPress={()=>Alert.alert('Scan Item')}
                title='Scan out'
                color='darkslateblue'
            /> : null}
            <Separator />
            {scannerActive ? <Scanner /> : null}
            <Separator />
            <Button style={styles.Btn}
                onPress={()=>Alert.alert('Scan Item')}
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