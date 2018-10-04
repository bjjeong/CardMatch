import { merge } from 'lodash';
import { 
  RECEIVE_CARD,
  generateCards
} from '../actions/game_actions';

let initialState = {
  cards: generateCards(),
  card1: null,
  card2: null
};

const GameReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CARD:
      return merge(newState, {card1: action.value});
    default:
      return state;
  }
};

export default GameReducer;