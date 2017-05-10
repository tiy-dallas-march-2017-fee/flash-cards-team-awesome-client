import _ from 'lodash';
import constants from './constants.js';

const initialState = {
  currentCard: 0,
  showFront: true,
  correctCount: 0,
  incorrectCount: 0,
  skippedCount: 0,
  cards: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.START_QUIZ:
      var shuffledCards = _.shuffle(action.set.cards.slice(0));
      var sliceEnd = 10;
      if (shuffledCards.length < 10) {
        sliceEnd = shuffledCards.length;
      }
      shuffledCards = shuffledCards.slice(0, sliceEnd);
      return Object.assign({}, state, {
        cards: shuffledCards,
        set: action.set,
        currentCard: 0,
        showFront: true,
        correctCount: 0,
        incorrectCount: 0,
        skippedCount: 0
      });
    case constants.QUIZ_CARD_CORRECT:
      return Object.assign({}, state, {
        currentCard: state.currentCard + 1,
        correctCount: state.correctCount + 1
      });
    case constants.QUIZ_CARD_INCORRECT:
      return Object.assign({}, state, {
        currentCard: state.currentCard + 1,
        incorrectCount: state.incorrectCount + 1
      });
    default:
      return state;
  }
}

module.exports = reducer;
