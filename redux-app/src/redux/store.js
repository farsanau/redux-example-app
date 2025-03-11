import { createStore } from 'redux';
import { counterReducer } from './counterSlice';

// Create a Redux store with the counterReducer
export const store = createStore(counterReducer);