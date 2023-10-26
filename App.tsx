
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Question from './questions/question';

const QuizScreen: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: ' Qual letra esse sinal representa?',
      options: ['A', 'E', 'I', 'O','U'],
      correctAnswer: 'A',
      imageSource: require('./letras/A.png'), 
      
    },
    {
      questionText: 'Qual letra esse sinal representa?',
      options: ['A', 'E', 'I', 'O','U'],
      correctAnswer: 'I',
      imageSource: require('./letras/I.png'), 
    },
    {
      questionText: ' Qual letra esse sinal representa?',
      options: ['A', 'E', 'I', 'O','U'],
      correctAnswer: 'U',
      imageSource: require('./letras/U.png'), 
    },
    {
      questionText: ' Qual letra esse sinal representa?',
      options: ['A', 'E', 'I', 'O','U'],
      correctAnswer: 'E',
      imageSource: require('./letras/E.png'), 
    },
    {
      questionText: 'Qual letra esse sinal representa?',
      options: ['A', 'E', 'I', 'O','U'],
      correctAnswer: 'O',
      imageSource: require('./letras/O.png'), 
    },

  ];

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }


    setCurrentQuestion(currentQuestion + 1);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0); 
  };

  return (
    <View>
      {currentQuestion < questions.length ? (
        <Question
          questionText={questions[currentQuestion].questionText}
          options={questions[currentQuestion].options}
          imageSource={questions[currentQuestion].imageSource}
          onPress={handleAnswer}
        />
      ) : (
        <View>
          <Text>Pontuação final: {score}</Text>
          <TouchableOpacity style={styles.
            PontuacaoF}>
          <Button title="Reiniciar" 
            onPress={handleRestart} />
            </TouchableOpacity>
        </View>
      )}
    </View>

    
  );
};

const styles = StyleSheet.create({
  PontuacaoF: {
     marginLeft: 150,
     top: 500,
     width: 100,
     height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
}
);


export default QuizScreen;
