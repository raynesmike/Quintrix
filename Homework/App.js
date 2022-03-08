import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button} from './src/ButtonDumb';

const App = () => {
  const styles = {
    divider: {
      marginVertical: 10,
    },
  };
  return (
    <SafeAreaView>
      <Button />
      <View style={styles.divider} size={'xxs'} />
      <Button title="New Button" size={'lg'} />
      <View style={styles.divider} />
      <Button title="New Button" size={'lg'} />
      <View style={styles.divider} />
      <Button title="New Button" size={'sm'} />
      <View style={styles.divider} />
      <Button title="New Button" size={'xxxs'} />
    </SafeAreaView>
  );
};

export default App;
