import { merge } from 'lodash';
import { RECEIVE_CARD, generateCards } from '../actions/game_actions';

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
      newState.cards.map(card => {
        return card.id === action.card.id ?
          card.up = true : card.up = false;
      });

      // Draw the first card
      if(newState.card1 === null || (newState.card1 !== null && newState.card2 !== null)) {
        action.card.up = true;
        return merge(newState, {card1: action.card, card2: null});
      }
      // Draw the second card
      else if(newState.card1 !== null && newState.card2 === null){
        action.card.up = true;

        if(newState.card1.value === action.card.value) {
          newState.cards.map(card => {
            if(card.value === action.card.value) {
              card.up = true;
              card.matched = true;
            } else {
              card.up ? card.up = true : card.up = false;
              card.matched ? card.matched = true : card.matched = false;
            }
            return card;
          });
        }
        return merge(newState, {card2: action.card});
      } else {
        return merge(newState, {card3: "this should never get filled out"});
      }
    default:
      return state;
  }
};

export default GameReducer;