import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 

import { useNavigation } from '@react-navigation/native'


export default function Profile() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
    
            <View style={styles.containerUser}>
            </View>

            <View style={styles.containerMain}>

        {/* FazerFlatList */}

                
                
            </View>

            <View style={styles.containerBar}>
                
                
                <TouchableOpacity>
                    <AntDesign name="home" size={30} color="#0D5692" style={styles.IconHome} />
                    <Text style={styles.textIconHome}>Principal</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Octicons name="gear" 
                    size={30} color="black" 
                    style={styles.IconGear} 
                    onPress={ () => navigation.navigate('Settgns') }/> 
                    <Text style={styles.textIconGear}>Configurações</Text>
                </TouchableOpacity>

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
        flex: 3,
        backgroundColor: '#87CEFA'
    },
    containerMain: {
        flex: 6,
        backgroundColor: '#F5F5F5'
    },
    containerBar: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    buttonGames: {
        position: 'absolute',
        paddingStart: '5%',
        paddingEnd: '5%',
        left: 50,
        backgroundColor: '#0D5692',
        borderRadius: 15,
        paddingVertical: 10,
        width: '70%',
        bottom: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonHistorys: {
        position: 'absolute',
        backgroundColor: '#0D5692',
        borderRadius: 15,
        paddingVertical: 10,
        width: '50%',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonExercise: {
        backgroundColor: '#0D5692',
        borderRadius: 15,
        paddingVertical: 10,
        width: '50%',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTitle: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold'
    },
    buttonText: {
        fontSize: 15,
        color: '#FFF',
         
    }, 
    IconHome: {
        position: 'absolute',
        left: 50,
        top: 10,
    },
    IconGear: {
        position: 'absolute',
        right: 80,
        top: 10,
    },
    textIconHome: {
        position: 'absolute',
        color: '#0D5692',
        fontSize: 15,
        left: 35,
        top: 40,
    },
    textIconGear: {
        position: 'absolute',
        fontSize: 15,
        right: 45,
        top: 40,
    },

})