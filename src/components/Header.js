import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>
                Tracking App
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        marginTop:22,
        backgroundColor: 'darkslateblue'
    },
    text: {
        color:'#fff',
        fontSize: 23,
        textAlign: 'center'
    }
})
