import { createStore, combineReducers } from 'redux';
import quizzerReducer from './quizzer-reducer.js';
import setsReducer from './sets-reducer.js';
import actions from './actions.js';

const reducer = combineReducers({
  sets: setsReducer,
  quizzer: quizzerReducer
});

const store = createStore(reducer);

module.exports = {
  store: store,
  actions: actions
};
