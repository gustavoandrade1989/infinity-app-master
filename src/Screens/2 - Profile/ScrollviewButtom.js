import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from 'react-native';

const Button = ( { navigation } ) => {
  return (
    <SafeAreaView style={styles.container}>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    scrollView: {
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

  });
  
  export default Button;