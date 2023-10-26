import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface QuestionProps {
  questionText: string;
  options: string[];
  imageSource: number;
  onPress: (selectedOption: string) => void;
}

const Question: React.FC<QuestionProps> = ({
  questionText,
  options,
  imageSource,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.questionText}>{questionText}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => onPress(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: 180,
    height: 180,
    top: 220,
    borderRadius:40,
    
  },
  questionText: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
    
   
  },
  option: {
    backgroundColor: '#ffefd5',
    top: 250,
    padding: 10,
    margin: 5,
    width:150,
    resizeMode:'contain',
    borderRadius:40,

 
  },
  optionText: {
    fontSize: 20,
    color:'#fffff',
    textAlign: 'center',

  },

  pontuacaoF: {
    fontSize: 16,
    color:'#fffff',
    textAlign: 'center',

  },
  
});

export default Question;