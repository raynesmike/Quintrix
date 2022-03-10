import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button} from './src/dumb/button/Button';
import {Quiz} from './src/smart/quiz/Quiz';

const App = () => {
  const styles = {
    divider: {
      marginVertical: 10,
    },
  };
  return (
    <SafeAreaView>
      <Quiz />
    </SafeAreaView>
  );
};

export default App;
