import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Button} from '../../dumb/button/Button';
import {styles} from './Quiz.style';

export function QuizView({data, press}) {
  const [color, setColor] = useState('blue');

  return (
    <View>
      <Text>{data.question}</Text>
      {data.answers.map((answers, index) => (
        <View key={'' + index} style={styles.answerContainer}>
          <Button
            onPress={() => (press(index) ? setColor('green') : setColor('red'))}
            isCorrect={color}
            title={answers}
          />
        </View>
      ))}
    </View>
  );
}
