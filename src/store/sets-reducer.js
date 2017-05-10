import constants from './constants.js';

const initialState = {
  list: [],
  sortSetsBy: 'name'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOAD_SETS:
      return Object.assign({}, state, { list: action.sets });
    case constants.CHANGE_SORT:

      let copy = state.list.slice();
      if (action.sort === 'name') {
        copy.sort((a, b) => { return a.name > b.name; });
      }
      else {
        copy.sort((a, b) => { return a.cards.length < b.cards.length; });
      }
      return Object.assign({}, state, { list: copy, sortSetsBy: action.sort });
    default:
      return state;
  }
}

module.exports = reducer
