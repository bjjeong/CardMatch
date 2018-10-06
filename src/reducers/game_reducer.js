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
      if(newState.card1 === null) {
        return merge(newState, {card1: action.card});
      } else if(newState.card1 !== null && newState.card2 === null){
        return merge(newState, {card2: action.card});
      } else {
        return merge(newState, {card3: "this should never get filled out"});
      }
    default:
      return state;
  }
};

export default GameReducer;