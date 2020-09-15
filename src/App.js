import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducers from './reducers';
import './App.css';
import NewTimer from './components/new-timer'
import ListTimers from './list-timers'

const store = createStore(reducers);

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
            <NewTimer />
            <ListTimers />
        </div>
      </Provider>
    );
  }
}

export default App;