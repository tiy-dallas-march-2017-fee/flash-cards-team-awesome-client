import React from 'react';
import UserData from './../UserData.js';

class CardEditorComponent extends React.Component {

  submitCard(evt) {
    evt.preventDefault();

    var cb = () => {
      this.props.history.goBack();
    };

    UserData.addCardToSet(this.props.setId, this.frontInput.value, this.backInput.value, cb);
  }

  render() {
    return <div className="card-editor">
      <h2>The Card Editor</h2>

      <form onSubmit={(evt) => { this.submitCard(evt);}}>

        <input placeholder="front" ref={(input) => {this.frontInput = input; }} />

        <input placeholder="back" ref={(input) => {this.backInput = input; }} />

        <button>Save</button>

      </form>

    </div>;
  }

}

module.exports = CardEditorComponent;
