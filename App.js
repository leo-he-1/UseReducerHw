import React from 'react';
import {StateProvider} from './src/context/StateProvider';
import {Counter} from './src/components/Counter';
import {Text} from 'react-native';

const App = () => {
  const initialState = {
    count: 0
  };

  const reducer = (state, action) => {
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
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Counter />
    </StateProvider>
  );
};

export default App;