import React from 'react';
import UserData from './../UserData.js';
import { Link } from 'react-router-dom';
import { store, actions } from './../store/store.js';

console.log(store);
class SetListComponent extends React.Component {

  constructor() {
    super();

    this.state = store.getState();
  }

  componentDidMount() {
    this.unsub = store.subscribe(() => this.setState(store.getState()));

    this.loadSets();
  }

  loadSets() {
    UserData.loadSets((data) => {
      const action = Object.assign({}, actions.LOAD_SETS, { sets: data.sets })
      store.dispatch(action);
    });
  }

  componentWillUnmount() {
    this.unsub();
  }

  sortByName(evt) {
    console.log(evt);
    const action = Object.assign({}, actions.CHANGE_SORT, { sort: 'name' });
    store.dispatch(action);
  }

  sortByCardCount() {
    const action = Object.assign({}, actions.CHANGE_SORT, { sort: 'cardCount' });
    store.dispatch(action);

  }

  deleteSet(setId) {
    UserData.deleteSet(setId, () => this.loadSets());
  }

  addCards(setId) {
    this.props.history.push('/set/' + setId);
  }

  navigateToQuiz(set) {
    console.log(set);
    if(set.cards.length === 0){
      alert('There\'s no flashcards in there!')
    }
    else{
      this.props.history.push('/set/' + set.id + '/quizzer');
    }
  }

  render() {
    var noSetsMessaging;
    let sortingButtons;
    if (this.state.sets.list.length === 0) {
      noSetsMessaging = <p>You do not have any sets! Create one.</p>
    }
    else{
      sortingButtons = <div className="sorting">
        <div className="by-name {this.blah}" onClick={(evt) => this.sortByName(evt) }>by name</div>
        <div className="by-card-count {this.blah}" onClick={() => this.sortByCardCount() }>by # of cards</div>
      </div>
    }

    return <div className="set-list">
      <h2>Set List</h2>

      {noSetsMessaging}

      <Link to="/create-set" className="create-set">Create new set</Link>

      {sortingButtons}

      <ul>
      {this.state.sets.list.map((set, index) => {
        return <li key={set.id} className="set">
          <div className="set-name">{set.name}</div>
          <div className="number-of-cards"># of cards: {set.cards.length}</div>
          <p>{set.description}</p>

          <div className="button delete-set" onClick={() => {this.deleteSet(set.id)}}>delete</div>
          <div className="button add-cards" onClick={() => {this.addCards(set.id)}}>add cards</div>
          <div className="button quiz" onClick={() => {this.navigateToQuiz(set)}}>quiz</div>

        </li>
      })}
      </ul>
    </div>;
  }
}

module.exports = SetListComponent;
