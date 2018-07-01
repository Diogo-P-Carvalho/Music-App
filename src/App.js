import React, { Component } from 'react';
import Main from './components/Routes';
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="text-center">
          <h1 className="title">Music App</h1>          
        </header>

        <Main />
      </div>
    );
  }
}

export default App;

