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
        
        <TouchableOpacity activeOpacity={0.8} style={styles.containerButtonGames}>
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