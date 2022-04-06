import React from 'react';
import {useStateValue} from '../context/StateProvider';
import {Text, Button} from 'react-native';


export const Counter = () => {
  const [{count}, dispatch] = useStateValue();

  const decrement5=()=>{
    dispatch({type: 'decrement5'})
  }
  const decrement1=()=>{
    dispatch({type: 'decrement1'})
  }
  const increment1=()=>{
    dispatch({type: 'increment1'})
  }
  const increment5=()=>{
    dispatch({type: 'increment5'})
  }

  return (
    <>
    <Button
    title="-5"
    onPress={() =>
      decrement5()
    }
  />
  <Button
    title="-1"
    onPress={() =>
      decrement1()
    }
  />
  <Text>{count}</Text>
  <Button
    title="+1"
    onPress={() =>
      increment1()
    }
  />
  <Button
    title="+5"
    onPress={() =>
      increment5()
    }
  />
  </>
    
  );
};