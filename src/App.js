import React, {Component} from 'react';
import Slider from './components/Slider';

import './App.css';
class App extends Component {
state = {
  slider: {
    value: [2, 4]
  }
}

  render() {
    return (
      <div className="App">
        <Slider value={this.state.slider.value}/>
      </div>
    );
  } 
}

export default App;
