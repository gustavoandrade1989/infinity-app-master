import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from 'react-native';

const Button = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity style={styles.containerButtonGames}>
            <Text style={styles.buttonTextGames}>
                Botao 1
            </Text>
            <Text>Descrição 1</Text>     
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerButtonHistory}>
            <Text style={styles.buttonTextHistory}>
                Botao 2
            </Text>
            <Text>Descrição 2</Text>     
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerButtonActivity}>
            <Text style={styles.buttonTextActivity}>
                Botao 3
            </Text>
            <Text>Descrição 3</Text>   
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginHorizontal: 20,

    },
    buttonTextGames: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 50,
    },
    containerButtonGames: {
        backgroundColor: '#0D5692',
        marginBottom: 50,
        borderRadius: 10, 
    },

    buttonTextHistory: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 50,
    },
    containerButtonHistory: {
        backgroundColor: '#3282B8',
        marginBottom: 50,
        borderRadius: 10,
    },
    buttonTextActivity: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 50,
    },
    containerButtonActivity: {
        backgroundColor: '#69B1C9',
        marginBottom: 50,
        borderRadius: 10,
    },

  });
  
  export default Button;