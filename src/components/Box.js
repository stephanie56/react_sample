import React, { Component } from 'react';
import '../styles/index.css';

class Box extends Component {
  constructor(props){
    super(props);
    this.state={
      className: props.color,
    }
  }

  render() {
    return (
      <div className={`box ${this.state.className}`}
        onClick={()=>this.props.clickHandler()}
      >{ this.props.name }</div>
    );
  }
}

export default Box;
