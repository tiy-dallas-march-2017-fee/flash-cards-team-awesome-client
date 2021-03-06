import React from 'react';
import UserData from './../UserData.js';

class SetEditorComponent extends React.Component {

  submitSet(evt) {
    evt.preventDefault();
    const cb = () => this.props.history.goBack();
    UserData.createSet(this.nameInput.value, this.descriptionInput.value, cb);
  }

  render() {
    return <div className="set-editor">
      <h2>Set Editor</h2>

      <form onSubmit={(evt) => { this.submitSet(evt); }}>

        <input placeholder="name" ref={(input) => { this.nameInput = input; }} />

        <textarea rows="5" cols="40" placeholder="description" ref={(input) => { this.descriptionInput = input; }} />
        <br></br>
        <button>Save</button>
      </form>
    </div>
  }

}

module.exports = SetEditorComponent;
