import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const COLORS = ['red', 'blue', 'green', 'yellow'];

const ColorMatchingGame = () => {
  const [targetColor, setTargetColor] = useState('');
  const [score, setScore] = useState(0);

  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
  };

  const startNewRound = () => {
    const newColor = generateRandomColor();
    setTargetColor(newColor);
  };

  const handleColorSelection = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      startNewRound();
    } else {
      
      setScore(0);
      startNewRound();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.targetColorText}>
        Escolha a cor: {targetColor}
      </Text>
      <View style={styles.colorOptionsContainer}>
        {COLORS.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.colorOption, { backgroundColor: color }]}
            onPress={() => handleColorSelection(color)}
          />
        ))}
      </View>
      <Text style={styles.scoreText}>Pontos: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  targetColorText: {
    fontSize: 24,
    marginBottom: 20,
  },
  colorOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  colorOption: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  scoreText: {
    fontSize: 18,
  },
});

export default ColorMatchingGame;