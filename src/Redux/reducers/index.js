import { combineReducers } from 'redux';
import questionReducers from './questionReducers.js';

const reducers = combineReducers({
  questionData: questionReducers,
});

export default reducers;
