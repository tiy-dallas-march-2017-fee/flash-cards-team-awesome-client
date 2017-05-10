import constants from './constants.js';

const LOAD_SETS = { type: constants.LOAD_SETS };
const CHANGE_SORT = { type: constants.CHANGE_SORT };
const SHUFFLE_CARDS = { type: constants.SHUFFLE_CARDS };
const START_QUIZ = { type: constants.START_QUIZ };
const QUIZ_CARD_CORRECT = { type: constants.QUIZ_CARD_CORRECT };
const QUIZ_CARD_INCORRECT = { type: constants.QUIZ_CARD_INCORRECT };

const actions = {
  LOAD_SETS: LOAD_SETS,
  CHANGE_SORT: CHANGE_SORT,
  SHUFFLE_CARDS: SHUFFLE_CARDS,
  START_QUIZ: START_QUIZ,
  QUIZ_CARD_CORRECT: QUIZ_CARD_CORRECT,
  QUIZ_CARD_INCORRECT: QUIZ_CARD_INCORRECT
};

module.exports = actions;
