import { combineReducers } from 'redux';
import count from './count/reducer';
import tick from './tick/reducer';

const reducers = combineReducers({
  count,
  tick,
});

export default reducers;
