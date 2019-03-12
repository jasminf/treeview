import React, {Component} from 'react';
import './Tree.css';

class ButtonIsToggled extends Component {
  state = {
    isToggle: false,
  };

  onToggle = () => {
    this.setState({isToggle: !this.state.isToggle});
  };

  render() {
    const className = this.state.isToggle ? 'toggled-up' : 'toggled-down';
    const {text} = this.props;

    return (
      <li className={className} onClick={this.onToggle}> {text} </li>
    )
  }
}

export default ButtonIsToggled;