import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function SignIn( {navigation} ) {
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
                <FontAwesome name="user" size={24} color="black" style={styles.iconUser} />
                
                <TextInput placeholder="E-mail" style={styles.input} />
                
                
                <Fontisto name="locked" size={24} color="black" style={styles.iconLocked}/>

                <TextInput placeholder="Senha" style={styles.input} />
                
                <TouchableOpacity activeOpacity={0.8} style={styles.buttonAcess} onPress={ () => navigation.navigate('Profile')} >
                    <Text style={styles.buttonTextAcess}>Logar</Text>   
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={styles.buttonPassword} onPress={ () => navigation.navigate('Welcome') }>
                    <Text style={styles.buttonTextPassword}>Esqueceu a senha?</Text>   
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={styles.buttonRegister} onPress={ () => navigation.navigate('Register') }>
                    <Text style={styles.buttonTextRegister}>Cadastrar-se</Text>   
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
        containerForm:{
            backgroundColor: '#FFF',
            flex: 2,
            paddingStart: '5%',
            paddingEnd: '5%'
        },
        input:{
            borderBottomColor: '#0D5692' ,
            borderBottomWidth: 1,
            height: 40,
            marginBottom: 20,
            fontSize: 20,
            paddingLeft: 30,
            marginHorizontal: 35,
        },
        buttonAcess: {
            backgroundColor: '#0D5692',
            borderRadius: 10,
            paddingVertical: 8,
            marginHorizontal: 85,
            top: 100,
            width: '50%',
            bottom: '15%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonTextAcess: {
            fontSize: 18,
            color: '#FFF',
            fontWeight: 'bold'
        },
        buttonRegister: {    
            top: 225,
            width: '100%',
            bottom: '15%',
            alignItems: 'center',
            justifyContent: 'center'
        }, 
        buttonTextRegister: {
            fontSize: 25,
            color: '#023E8A',
             
        },
        buttonPassword: {    
            top: 110,
            width: '100%',
            bottom: '15%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonTextPassword: {
            fontSize: 18,
            color: '#023E8A',
            fontWeight: 'bold' 
        }, 
        iconUser: {
            position: 'absolute',
            left: 55,
            top: 5,
        },
        iconLocked: {
            position: 'absolute',
            left: 55,
            top: 65,
        },
        iconSecret: {
            position: 'absolute',
            right: 5,
            top: 10,
        },

})


