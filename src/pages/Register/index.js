import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Register() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: '25%' }}
                    resizeMode="contain"
                />
            </View>    
           

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.message} >Cadastro</Text>

                <TextInput placeholder="Nome Completo" style={styles.input} />
                
                
                <TextInput placeholder="E-Mail" style={styles.input} />

                
                <TextInput placeholder="Senha" style={styles.input} />

                
                <TextInput placeholder="Confirmar Senha" style={styles.input} />

                <TouchableOpacity style={styles.buttonAcess}>
                    <Text style={styles.buttonTextAcess}>Cadastrar</Text>   
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonReturn} onPress={ () => navigation.navigate('Welcome') }>
                    <Text style={styles.buttonTextReturn}>Voltar</Text>   
                </TouchableOpacity>
            </Animatable.View> 
                
          
        </View>
    );
}
const styles = StyleSheet.create({
        container:{
            flex: 5,
        backgroundColor: '#F5F5F5',
        },
        containerLogo: {
            flex: 1,
            backgroundColor: '#F5F5F5',
            justifyContent: 'center',
            alignItems: 'center'
        },
        containerHeader:{
            marginTop: '14%',
            marginBottom: '8%',
            paddingStart: '5%',
        },
        message:{
            fontSize: 28,
            marginVertical: 20,
            marginHorizontal: 100,
            fontWeight: 'bold',
            color: '#0D5692',
            justifyContent: 'center',
            alignItems: 'center'
        },
        
        containerForm:{
            backgroundColor: '#FFF',
            flex: 5,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            paddingStart: '5%',
            paddingEnd: '5%',
            
        },
        containerFormAcess: {
            flex: 1,
            backgroundColor: '#87CEFA',
            paddingStart: '5%',
            paddingEnd: '5%'
        },
        containerFormRegister: {
            flex: 3,
            backgroundColor: '#87CEFA',
            paddingStart: '5%',
            paddingEnd: '5%'
        },
        input:{
            borderBottomColor: '#0D5692' ,
            borderBottomWidth: 1,
            height: 50,
            marginBottom: 15,
            fontSize: 20, 
        },
        buttonAcess: {
            backgroundColor: '#0D5692',
            borderRadius: 15,
            paddingVertical: 10,
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
        buttonReturn: {    
            borderRadius: 15,
            paddingVertical: 10,
            marginHorizontal: 10,
            marginVertical: 1,
            width: '100%',
            bottom: '15%',
            alignItems: 'center',
            justifyContent: 'center'
        }, 
        buttonTextReturn: {
            fontSize: 18,
            color: '#023E8A',
            fontWeight: 'bold' 
        }, 
})
