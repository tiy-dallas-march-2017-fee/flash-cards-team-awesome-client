import React from 'react'
import UserData from './../UserData.js';
import { Link } from 'react-router-dom';
import { store } from './../store/store.js';

class SetViewComponent extends React.Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsub = store.subscribe(() => this.setState(store.getState()));

    UserData.getSet(this.props.match.params.setId);
  }

  componentWillUnmount() {
    this.unsub();
  }

  render() {

    let currentSet = this.state.sets.list.find((x) => x.id === this.props.match.params.setId);

    if (currentSet === undefined) {
      return <div></div>
    }

    var cardList;
    if (currentSet.cards.length === 0) {
      cardList = <div>You have no cards.</div>
    }
    else {
      cardList = <ul>
        {currentSet.cards.map((card) => {
          return <li key={card.id} className="card">
            <div className="front">Front: {card.front}</div>
            <div className="back">Back: {card.back}</div>
          </li>
        })}
      </ul>;
    }

    return <div className="set-component">
      <h2>Set: {currentSet.name} (id: {this.props.match.params.setId})</h2>

      <div className="controls">
        <ul>
          <li><Link to={'/set/' + this.props.match.params.setId + '/newcard'}>Add a New Card</Link></li>
          <li><Link to={'/set/' + this.props.match.params.setId + '/quizzer'}>Quizzer</Link></li>
        </ul>


      </div>

      {cardList}
    </div>
  }

}

module.exports = SetViewComponent;
