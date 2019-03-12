import * as React from 'react';
import './App.css';
import listToTree from "list-to-tree-lite";
import nodes from "./nodes";
import TreeNode from './Components/TreeNode';

const treeData = listToTree(nodes);

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h1>Node Picker Assignment</h1>
        </div>
        <TreeNode treeData={treeData}/>
      </div>
    );
  }
}
export default App;





