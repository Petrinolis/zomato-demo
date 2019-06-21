import React, {Component} from 'react';
import Slider from './components/Slider';
import List from './components/List';

import './App.css';
class App extends Component {
  state = {
    slider: {
      value: [2, 4]
    }
  }

  cusine = [
    {
      name: 'Cafe Food',
      zomato_id: 1039,
    },
    {
      name: 'Asian',
      zomato_id: 3,
    },
    {
      name: 'Chinese',
      zomato_id: 25,
    },
    {
      name: 'Coffee and Tea',
      zomato_id: 161,
    },
    {
      name: 'Bakery',
      zomato_id: 5
    },
    {
      name: 'Pub Food',
      zomato_id: 983,
    },
    {
      name: 'Pizza',
      zomato_id: 82,
    },
    {
      name: 'Italian',
      zomato_id: 55,
    },
    {
      name: 'Fast Food',
      zomato_id: 40
    },
    {
      name: 'Sandwich',
      zomato_id: 304
    },
  ]
   
  render() {
    return (
      <div className="App">
        <Slider value={this.state.slider.value}/>
        <List />
      </div>
     );
  } 
}

export default App;
