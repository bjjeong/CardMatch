import { combineReducers } from 'redux';
import game from './game_reducer';

const rootReducer = combineReducers({
  game
});

export default rootReducer;