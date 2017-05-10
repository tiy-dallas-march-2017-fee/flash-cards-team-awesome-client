import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import SetListComponent from './components/SetListComponent.js';
import SetEditorComponent from './components/SetEditorComponent.js';
import SetViewComponent from './components/SetViewComponent.js';
import CardEditorComponent from './components/CardEditorComponent.js';
import QuizzerComponent from './components/QuizzerComponent.js';

import './scss/start.css';

class App extends Component {

  render() {
    console.log('render that ap');
    return (

      <Router>
        <div className="App">
          <header>
            <h1>A Flash Card App</h1>
          </header>
          <div className="main-content">
              <div>
                <Route path="/" exact render={(props) => <SetListComponent history={props.history} />} />
                <Route path="/create-set" render={(props) => <SetEditorComponent history={props.history} />} />
                <Route path="/set/:setId" exact component={SetViewComponent} />
                <Route path="/set/:setId/newcard" render={(props) => <CardEditorComponent history={props.history} setId={props.match.params.setId} />} />
                <Route path="/set/:setId/quizzer" render={(props) => <QuizzerComponent history={props.history} setId={props.match.params.setId} />} />

              </div>
          </div>
          <footer>
            This is a sample app for the Dallas Iron Yard Front-End Engineering Class
          </footer>
        </div>
      </Router>



    );
  }
}

module.exports = App;
