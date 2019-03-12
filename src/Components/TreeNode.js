import React, {Component} from 'react';
import ButtonIsToggled from './ButtonIsToggled'

class TreeNode extends Component {

  getChildrenNode(node) {
    const rootNode = (
      <ButtonIsToggled key={node.id} text={node.name}/>
    );
    const nodeChildes = node.children.map((child) => this.getChildrenNode(child));

    if (node.children && node.children.length > 0) {
      return [rootNode, <ul> {nodeChildes} </ul>]
    } else return rootNode;
  };

  render() {
    const {treeData} = this.props;

    return (
      <div>
        <ul>
          {treeData.map((node) => {
            return this.getChildrenNode(node)
          })}
        </ul>
      </div>
    )
  }
}

export default TreeNode;
