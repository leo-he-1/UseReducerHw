import React, {useReducer} from 'react';
import { Text, View, Button } from 'react-native';

export const reducer = (state, action) =>{
  switch(action.type){
    case 'decrement5':
      return {count: state.count - 5}
    case 'decrement1':
      return {count: state.count - 1}
    case 'increment1':
      return {count: state.count + 1}
    case 'increment5':
      return {count: state.count + 5}
    default:
      return state;
      
  }
}

export default function App() {
  const [state, adjustment] = useReducer(reducer, {count:0});


  const decrement5=()=>{
    adjustment({type: 'decrement5'})
  }
  const decrement1=()=>{
    adjustment({type: 'decrement1'})
  }
  const increment1=()=>{
    adjustment({type: 'increment1'})
  }
  const increment5=()=>{
    adjustment({type: 'increment5'})
  }

  return (
    <View>
    <Button title = '-5'onPress = {()=>decrement5(this)}></Button>
    <Button title = '-1'onPress = {()=>decrement1(this)}></Button>
      <Text>{state.count}</Text>
    <Button title = '+1' onPress = {()=>increment1(this)}></Button>
    <Button title = '+5'onPress = {()=>increment5(this)}></Button>
  
    </View>
  );
}