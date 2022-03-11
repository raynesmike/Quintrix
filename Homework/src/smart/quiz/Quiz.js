import {View, Text} from 'react-native';
import React from 'react';
import {QuizView} from './Quiz.view';
import {styles} from './Quiz.style';

export function Quiz() {
  // mock
  const mockData = {
    question: 'What const is doing?',
    answers: [
      'Create variable',
      'define function',
      'Shot down computer',
      'And one more stupid idea',
    ],
    correctAnswer: 0,
  };

  const checkAnswer = index => {
    return index;
  };

  return <QuizView data={mockData} checkAnswer={checkAnswer} />;
}
