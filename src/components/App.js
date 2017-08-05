import React, { Component } from 'react';
import Box from './Box';
import '../styles/index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      colours: ['blue', 'red', 'yellow', 'orange', 'purple', 'grey', 'green']
    }
    this.updateColor = this.updateColor.bind(this);
  };

  updateColor(){
    const newColours =
      this.state.colours.slice(-1).concat(
      this.state.colours.slice(0, this.state.colours.length - 1)
    );
    this.setState({colours: newColours})
  }

  render() {
    return (
      <div className="App">
        {this.state.colours.map(colour =>
          <Box key={colour} name={colour} colour={colour} clickHandler={this.updateColor}/>
        )}
      </div>
    );
  }
}

export default App;
