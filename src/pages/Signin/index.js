import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: '50%' }}
                    resizeMode="contain"
                />
            </View>

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
        backgroundColor: '#FFF',
        },
        containerHeader:{
            marginTop: '14%',
            marginBottom: '8%',
            paddingStart: '5%',
        },
        containerLogo: {
            flex: 1,
            backgroundColor: '#FFF',
            justifyContent: 'center',
            alignItems: 'center'
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
            backgroundColor: '#FFF',
            flex: 2,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            paddingStart: '5%',
            paddingEnd: '5%'
        },
        input:{
            borderBottomColor: '#0D5692' ,
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
            marginVertical: 100,
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


