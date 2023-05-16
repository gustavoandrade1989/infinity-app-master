import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();
    
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
                    <Text style={styles.buttonTextLogin}>Logar</Text>
                </TouchableOpacity>
            </animatable.View>

            <animatable.View delay={600} animation="fadeInUp" style={styles.containerFormRegister}>
                <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate('Register') }>
                    <Text style={styles.buttonTextRegister}>Cadastrar-se</Text>
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
    containerFormRegister: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    buttonLogin: {
        position: 'absolute',
        backgroundColor: '#0D5692',
        borderRadius: 15,
        paddingVertical: 10,
        marginHorizontal: 100,
        marginVertical: 5,
        width: '50%',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonRegister: {
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        marginHorizontal: 100,
        marginVertical: 40,
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
    buttonTextRegister: {
        fontSize: 18,
        color: '#0D5692',
        fontWeight: 'bold',
    }
});

