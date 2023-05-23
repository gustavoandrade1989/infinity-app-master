import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome({ navigation }) {    
    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: '50%' }}
                    resizeMode="contain"
                />
            </View>

            <animatable.View delay={600} animation="fadeInUp" style={styles.containerFormLogin}>
                <TouchableOpacity style={styles.buttonLogin} onPress={ () => navigation.navigate('SignIn') }>
                    <Text style={styles.buttonTextLogin}>Entrar</Text>
                </TouchableOpacity>
            </animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    containerLogo: {
        flex: 5,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerFormLogin: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    buttonLogin: {
        backgroundColor: '#0D5692',
        borderRadius: 15,
        paddingVertical: 10,
        marginHorizontal: 85,
        width: '50%',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextLogin: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },

});

