import React, { Component } from 'react';
import Nav from './Nav';
import '../App.scss';
class App extends Component {
  render() {
    return (
      <div>
        <Nav className="Nav"/>
        {this.props.children}
      </div>
    );
  }
};

export default App;
