/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return <ButtonSection />;
  }
}

const ButtonSection = () => (
  <View style={styles.container}>
    <ButtonContainer buttonVariation="default"></ButtonContainer>
    <ButtonContainer
      buttonVariation="buttonVariation1"
      color="#2A6ED8"></ButtonContainer>
    <ButtonContainer buttonVariation="buttonVariation2"></ButtonContainer>
  </View>
);

const ButtonContainer = ({buttonVariation = 'default', color}) => (
  <View style={styles.buttonContainerStyle1}>
    <TouchableOpacity>
      <Text style={styles[buttonVariation]}>DEFAULT</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles[buttonVariation]}>
        <Icon name="camera" color={color}></Icon> ICON
      </Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles[buttonVariation]}>
        <EvilIcons name="spinner-3" size={15} color={color}></EvilIcons> LOADING
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonContainerStyle1: {
    backgroundColor: '#F5F2F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    margin: 5,
    paddingVertical: 20,
    paddingHorizontal: '3%',
    flexDirection: 'column',
  },
  default: {
    color: '#2A6ED8',
    padding: 3,
    marginVertical: 2,
  },
  buttonVariation1: {
    color: '#2A6ED8',
    borderColor: 'gray',
    padding: 3,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 2,
  },
  buttonVariation2: {
    color: 'white',
    borderColor: 'gray',
    padding: 3,
    paddingHorizontal: 10,
    backgroundColor: '#2A6ED8',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 2,
  },
});
