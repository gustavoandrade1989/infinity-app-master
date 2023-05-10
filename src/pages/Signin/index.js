import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader} > 
                <Text style={styles.message}>Login</Text>     
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title} >Email</Text>
                <TextInput placeholder="Digite um Email" style={styles.input} />

                <Text style={styles.title} >Senha</Text>
                <TextInput placeholder="Digite sua Senha" style={styles.input} />

                <TouchableOpacity style={styles.buttonAcess} onPress={ () => navigation.navigate('Profile')} >
                    <Text style={styles.buttonTextAcess}>Acessar</Text>   
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate('Register') }>
                    <Text style={styles.buttonTextRegister}>Não Possui uma conta? Cadastre-se</Text>   
                </TouchableOpacity>

            </Animatable.View>   
        </View>
    );
}
const styles = StyleSheet.create({
        container:{
            flex: 5,
        backgroundColor: '#E3F2FD',
        },
        containerHeader:{
            marginTop: '14%',
            marginBottom: '8%',
            paddingStart: '5%',
        },
        message:{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#0D5692',
            justifyContent: 'center',
            alignItems: 'center'
        },
        title:{
            fontSize: 25,
            marginTop: 28,
        },
        containerForm:{
            backgroundColor: '#87CEFA',
            flex: 1,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            paddingStart: '5%',
            paddingEnd: '5%'
        },
        input:{
            borderBottomWidth: 1,
            height: 40,
            marginBottom: 12,
            fontSize: 16,
        },
        buttonAcess: {
            backgroundColor: '#0D5692',
            borderRadius: 50,
            paddingVertical: 8,
            marginHorizontal: 100,
            marginVertical: 125,
            width: '50%',
            bottom: '15%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonTextAcess: {
            fontSize: 18,
            color: '#FFF',
            fontWeight: 'bold'
        },
        buttonRegister: {    
            borderRadius: 50,
            paddingVertical: 8,
            marginHorizontal: 10,
            marginVertical: 100,
            width: '100%',
            bottom: '15%',
            alignItems: 'center',
            justifyContent: 'center'
        }, 
        buttonTextRegister: {
            fontSize: 18,
            color: '#023E8A',
            fontWeight: 'bold' 
        }, 
})


