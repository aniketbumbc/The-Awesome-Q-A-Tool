import { combineReducers } from 'redux';
import questionReducers from './questionReducers.js';

const reducers = combineReducers({
  questions: questionReducers,
});

export default reducers;
