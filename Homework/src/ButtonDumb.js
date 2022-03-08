/* eslint-disable prettier/prettier */
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const convertSize = (size) => {
  switch(size){
    case 'xxxxs': 
    style.container = { 
      ...style.container,
      paddingHorizontal: 1, 
      paddingVertical: 3
    }
    break;
    case 'xxxs': 
    style.container = { 
      ...style.container,
      paddingHorizontal: 2, 
      paddingVertical: 3
    }
    break;
    case 'xxs':    
     style.container = {  
      ...style.container,
       paddingHorizontal: 2, 
       paddingVertical: 5
      }
      break;
    case 'xs':     
    style.container = {  
      ...style.container,
      paddingHorizontal: 4, 
      paddingVertical: 8}
      break;
    case 's':     
    style.container = {  
      ...style.container,
      paddingHorizontal: 7, 
      paddingVertical: 10}

      break;
    case 'md':     
    style.container ={  
      ...style.container,
      paddingHorizontal: 12, 
      paddingVertical: 15}

      break;
    case 'lg':    
    style.container = {  
      ...style.container,
      paddingHorizontal: 30, 
      paddingVertical: 25}

      break;
    case 'lg':    
      style.container = {  
        ...style.container,
        paddingHorizontal: 40, 
        paddingVertical: 30}
      break;
    default:    
      style.container = {  
        ...style.container,
        paddingHorizontal: 25, 
        paddingVertical: 20}
      break
  }
}

const paddSizes = {
  xxs: { paddingHorizontal: 2, paddingVertical: 5},
  xs: { paddingHorizontal: 4, paddingVertical: 8},
  s: { paddingHorizontal: 7, paddingVertical: 10},
  md: { paddingHorizontal: 12, paddingVertical: 15},
  lg: { paddingHorizontal: 30, paddingVertical: 25},
  xxl: { paddingHorizontal: 40, paddingVertical: 30},
  };

const style = {
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#ff0000',
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
};

export const Button = ({title, color, size}) => {
  convertSize(size)
  return (
    <TouchableOpacity style={style.container}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};
