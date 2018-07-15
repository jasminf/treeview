import * as React from 'react';
import nodes from './nodes';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tree-Selector</h2>
        </div>
        <h1>Node Picker Assignment</h1>
        <h2>Requirements</h2>
        <ul>
          <li>A list of Nodes, each with a reference to their parent, should be displayed hierarchically</li>
          <li>The user should be able to select one or many nodes arbitrarily</li>
          <li>Selected nodes should be visually highlighted somehow</li>
        </ul>
        <h3>Bonus tasks</h3>
        <ul>
          <li>
            The user should be able to select groups (a node and its <u>immediate</u> children, no recursion required) without selecting every node
            individually).
          </li>
        </ul>
        <p>
          The solution does not need to be visually styled in any special way.
          The hierarchy and the selection should be visible of course.
        </p>

        <h2>Get Started</h2>
        <p>
          You can find the required list of nodes in the nodes.js file:
        </p>
        {JSON.stringify(nodes, null, ' ')}
        <p>
          Good luck and please don't hesitate to ask if anything is unclear.
        </p>
      </div>
    );
  }
}

export default App;
