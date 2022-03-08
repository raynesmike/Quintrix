/* eslint-disable prettier/prettier */
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const convertSize = (size) => {
  let dynamicStyle ={}
  switch(size){
    case 'xxxxs': 
    dynamicStyle = {
      paddingHorizontal: 1, 
      paddingVertical: 3
    }
    break;
    case 'xxxs': 
    dynamicStyle = {
      paddingHorizontal: 2, 
      paddingVertical: 3
    }
    break;
    case 'xxs':    
     dynamicStyle = { 
       paddingHorizontal: 2, 
       paddingVertical: 5
      }
      break;
    case 'xs':     
    dynamicStyle = { 
      paddingHorizontal: 4, 
      paddingVertical: 8}
      break;
    case 's':     
    dynamicStyle = { 
      paddingHorizontal: 7, 
      paddingVertical: 10}

      break;
    case 'md':     
    dynamicStyle ={ 
      paddingHorizontal: 12, 
      paddingVertical: 15}

      break;
    case 'lg':    
    dynamicStyle = { 
      paddingHorizontal: 30, 
      paddingVertical: 25}

      break;
    case 'lg':    
      dynamicStyle = {  
        paddingHorizontal: 40, 
        paddingVertical: 30}
      break;
    default:    
      dynamicStyle = {  
        paddingHorizontal: 25, 
        paddingVertical: 20}
      break
  }
  style.container ={...style.container, ...dynamicStyle}
  console.log(style.container)
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
