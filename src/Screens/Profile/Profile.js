import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Buttom from "./ScrollviewButtom";
export default function Profile( {navigation} ) {

    return (
        <View style={styles.container}>
    
            <View style={styles.containerUser}>
            </View>

            <View style={styles.containerMain}>
                {/* Fazer ScrollView */}
                <Buttom/>
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
        backgroundColor: '#87CEFA',
    },
    containerMain: {
        flex: 6,
        backgroundColor: '#F5F5F5',
    },
    containerNav: {
        position: 'absolute',
        alignContent: 'center',
        bottom: 0
    },
    navBar: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        width: '100%',
        justifyContent: 'space-evenly', 
    },
    iconBeHave: {
        padding: 14,
    }
})