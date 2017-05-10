import React from 'react';
import UserData from './../UserData.js';

class CardEditorComponent extends React.Component {

  submitCard(evt) {

    // Prevents the default submit action, adds card to the set, updates the store with the current data, clears the input boxes in the form.
    evt.preventDefault();

    var cb = () => {
      this.frontInput.value = '';
      this.backInput.value = '';
    };

    UserData.addCardToSet(this.props.setId, this.frontInput.value, this.backInput.value, cb);
  }

  returnToPrev() {
    // Returns to the SetViewComponent page.
    this.props.history.goBack();
  }

  render() {
    return <div className="card-editor">
      <h2>The Card Editor</h2>

      <form onSubmit={(evt) => { this.submitCard(evt);}}>

        <input placeholder="front" ref={(input) => {this.frontInput = input; }} />

        <input placeholder="back" ref={(input) => {this.backInput = input; }} />

        <button>Save</button>

      </form>

        <button onClick={() => { this.returnToPrev(); }}>Done</button>

    </div>;
  }
}

module.exports = CardEditorComponent;
