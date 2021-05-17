import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import {login} from '../store/user/actions'

export default function Login() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail =(textValue)=> setEmail(textValue)
    const onChangePass =(textValue)=> setPassword(textValue)



    return (
        <View>
            <TextInput placeholder="Email" style={styles.input} onChangeText={onChangeEmail}/>
            <TextInput placeholder="Password" style={styles.input} onChangeText={onChangePass}/>
            <TouchableOpacity style={styles.btn} onPress={()=> {
                console.log('before dispatch',email, password)
                dispatch(login(email, password))
                }}>
                <Text style={styles.loginInText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        height:60,
        padding:8,
        fontSize:16,
    },
    btn:{
       backgroundColor:'#c2bad8',
       padding:9,
       margin:5, 
    },
    loginInText:{
        color: 'darkslateblue',
        fontSize: 20,
        textAlign:'center'
    }
})
