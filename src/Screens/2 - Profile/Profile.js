import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function Profile({ navigation }) {

    return (

        <View style={styles.container}>
            <View style={styles.containerUser}>
            
                <Image
                    source={require('../../assets/garoto.png')}
                    style={styles.imagem}
                    resizeMode="contain" />

                <Text style={styles.nameUser} >USUARIO</Text>
               
                <TouchableOpacity style={styles.gearButton} onPress={() => navigation.navigate('profileSettigns')}>
                    <FontAwesome name="gear" size={24} color="black" />
                </TouchableOpacity>
            </View>



            <View style={styles.containerMain}>
            <ScrollView style={styles.scrollView}>
        
        <TouchableOpacity activeOpacity={0.8} style={styles.containerButtonGames} onPress={() => navigation.navigate('Games')}>
            <Text style={styles.title}>Jogos</Text>
            <Text style={styles.Descrition}>Jogos para colocar o conhecimento em prática.</Text>     
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.containerButtonHistory}>
            <Text style={styles.title}>Histórias</Text>
            <Text style={styles.Descrition}>Quadrinhos, Textos e muito mais para o entreterimento.</Text>     
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.containerButtonActivity}>
            <Text style={styles.title}>Ativ. Pedagógicas</Text>
            <Text style={styles.Descrition}>Encontre Atividades para a sua diversão e conhecimento</Text>   
        </TouchableOpacity>

      </ScrollView>
            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    containerUser: {
        flex: 1,
        backgroundColor: '#87CEFA',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    containerMain: {
        flex: 2,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileButton: {
        backgroundColor: '#0D5692',
        borderRadius: 10,
    },
    gearButton: {
        position: 'absolute',
        right: 20,
        top: 20,
    },
    imagem: {
        width: 160,
    },
    nameUser: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    scrollView: {
        paddingTop: 50,
        marginHorizontal: 20,

    },
    containerButtonGames: {
        paddingVertical: 10,
        paddingStart:'10%',
        paddingEnd: '30%',
        backgroundColor: '#0D5692',
        marginBottom: 50,
        borderRadius: 10, 
    },
    containerButtonHistory: {
        paddingVertical: 10,
        paddingStart:'10%',
        paddingEnd: '30%',
        backgroundColor: '#3282B8',
        marginBottom: 50,
        borderRadius: 10,
    },
    containerButtonActivity: {
        paddingVertical: 10,
        paddingStart:'10%',
        paddingEnd: '30%',
        backgroundColor: '#69B1C9',
        marginBottom: 50,
        borderRadius: 10,
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25,
    },
    Descrition: {
        color: '#FFF'
    },
})