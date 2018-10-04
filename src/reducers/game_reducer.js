// import { merge } from 'lodash';
import { RECEIVE_CARDS, generateCards } from '../actions/game_actions';

let initialState = {
  cards: generateCards()
};

const GameReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CARDS:
      console.log("am i in here?");
      return action.cards;
    default:
      return state;
  }
};

export default GameReducer;