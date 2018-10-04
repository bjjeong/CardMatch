// import { merge } from 'lodash';
import { 
  RECEIVE_CARDS,
  generateCards
} from '../actions/game_actions';

let initialState = {
  cards: generateCards(),
  card1: null,
  card2: null
};

const GameReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards;
    default:
      return state;
  }
};

export default GameReducer;