import React, { Component } from 'react';
import Box from './Box';
import '../styles/index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      colours: ['blue', 'red']
    }
    this.updateColor = this.updateColor.bind(this);
  };

  updateColor(){
    // alert(`yo so slow ${this.props.color}`);
    this.setState({colours: this.state.colours.reverse()})
  }

  render() {
    return (
      <div className="App">
        {this.state.colours.map(colour =>
          <Box key={colour} name={colour} color={colour} clickHandler={this.updateColor}/>
        )}
      </div>
    );
  }
}

export default App;
