import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from "react-native-ico-material-design";
import { useNavigation } from '@react-navigation/native'

var iconHeight = 26;
var iconWisth = 26;


export default function Profile() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
    
            <View style={styles.containerUser}>
            </View>

            <View style={styles.containerMain}>
        {/* FazerFlatList */} 
            </View>


        <View style={styles.containerNav}>
            <View style={styles.navBar}>
                <TouchableOpacity onPres={() => this.chanceText('Favourites')} style={styles.iconBeHave} >
                 <Icon name="favourite-heart-button" />
                </TouchableOpacity>
            </View>
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