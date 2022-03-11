import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Button} from '../../dumb/button/Button';
import {styles} from './Quiz.style';

export function QuizView({data, press}) {
  const [color1, setColor1] = useState('blue');
  const [color2, setColor2] = useState('blue');
  const [color3, setColor3] = useState('blue');
  const [color4, setColor4] = useState('blue');
  const [isCorrect, setCorrect] = useState(false);

  const [color, setColor] = useState('blue');
  function changeColor() {
    setColor('red');
  }
  return (
    <View>
      <Text>{data.question}</Text>
      <Button
        onPress={() => (press(0) ? setColor1('green') : setColor1('red'))}
        isCorrect={color1}
        title={data.answers[0]}
      />
      <Button
        onPress={() => (press(1) ? setColor2('green') : setColor2('red'))}
        isCorrect={color2}
        title={data.answers[1]}
      />
      <Button
        onPress={() => (press(2) ? setColor3('green') : setColor3('red'))}
        isCorrect={color3}
        title={data.answers[2]}
      />
      <Button
        onPress={() => (press(3) ? setColor4('green') : setColor4('red'))}
        isCorrect={color4}
        title={data.answers[3]}
      />
    </View>
  );
}
