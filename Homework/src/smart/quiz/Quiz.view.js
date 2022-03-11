import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Button} from '../../dumb/button/Button';
import {styles} from './Quiz.style';

export function QuizView({data, checkAnswer}) {
  const [color, setColor] = useState('blue');
  const [isCorrect, setCorrect] = useState();
  function changeColor() {
    setColor('red');
  }
  return (
    <View>
      <Text>{data.question}</Text>
      {data.answers.map((answers, index) => (
        <View key={'Answer' + index} style={styles.answerContainer}>
          <Button
            onPress={() => setCorrect(checkAnswer(index))}
            myAnswer={isCorrect}
            correctAnswer={data.correctAnswer}
            randomKey={index}
            myColor={color}
            title={answers}
          />
        </View>
      ))}
    </View>
  );
}
