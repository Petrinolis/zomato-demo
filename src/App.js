import React, {Component} from 'react';
import { Provider } from 'react-redux';

import Slider from './components/Slider';
import CheckBoxes from './components/CheckBoxes';
import RestaurantList from './components/RestaurantList'

import store from './store'
import './App.css';



class App extends Component {
   
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CheckBoxes />
          <Slider />
        </div>
        <RestaurantList />
      </Provider>
     );
  } 
}

export default App;
