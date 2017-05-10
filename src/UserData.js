import $ from 'jquery';
import { store, actions } from './store/store.js';

const URL = 'http://localhost:5003';
var userData;
const noop = () => {};

let UserData = {

  // Sets

  loadSets(cb) {
    $.ajax({
      url: `${URL}/api/sets`
    })
    .done((data) => {

      const action = Object.assign({}, actions.LOAD_SETS, { sets: data.sets })
      store.dispatch(action);

      userData = data;
      cb(data)
    });
  },

  getSet: (setId, cb) => {

    let callback = cb || noop;

    var setExists = () => {
      var set = userData.sets.find((x) => { return x.id === setId});
      callback(set);
    };

    if (userData === undefined) {
      UserData.loadSets(setExists);
    }
    else {
      setExists();
    }
  },

  createSet(name, description, cb) {
    $.ajax({
      url: `${URL}/api/sets`,
      method: 'POST',
      data: {
        name: name,
        description: description
      }
    })
    .done((first, second) => {
      console.log('first', first, 'second', second);
      cb();
    });
  },

  deleteSet: (setId, cb) => {
    $.ajax({
      url: `${URL}/api/sets/${setId}`,
      method: 'DELETE'
    })
    .done(() => {
      cb();
    });
  },



  // Cards

  addCardToSet: (setId, front, back, cb) => {

    $.ajax({
      url: `${URL}/api/sets/${setId}/card`,
      method: 'POST',
      data: {
        setId: setId,
        front: front,
        back: back
      }
    })
    .done((data) => {
      UserData.loadSets(cb)
    });
  },

  incrementIncorrectCountOnCard: (setId, cardId, cb) => {
    var set = userData.sets.find((x) => { return x.id === setId });
    // We have to find the position to update the server correctly.
    // We need the card to update the correct count in memory.
    var position;
    var card;
    set.cards.forEach((x, index) => {
      if (x.id === cardId) {
        card = x;
        position = index;
      }
    });

    card.incorrectCount += 1;

    $.ajax({
      url: `${URL}/api/sets/${setId}/card/${position}/incorrect`,
      method: 'POST'
    })
    .done((data) => {
      cb();
    });


  },

  incrementCorrectCountOnCard: (setId, cardId, cb) => {

    var set = userData.sets.find((x) => { return x.id === setId });

    // We have to find the position to update the server correctly.
    // We need the card to update the correct count in memory.
    var position;
    var card;
    set.cards.forEach((x, index) => {
      if (x.id === cardId) {
        card = x;
        position = index;
      }
    });

    card.correctCount += 1;

    $.ajax({
      url: `${URL}/api/sets/${setId}/card/${position}/correct`,
      method: 'POST'
    })
    .done((data) => {
      cb();
    });


  }

};

module.exports = UserData;
