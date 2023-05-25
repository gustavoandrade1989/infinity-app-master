import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Buttom from "./ScrollviewButtom";
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
                <Buttom />
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
    }
})