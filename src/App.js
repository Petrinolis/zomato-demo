import React, {Component} from 'react';
import { Provider } from 'react-redux';

import Slider from './components/Slider';
import CheckBoxes from './components/CheckBoxes';
import RestaurantList from './components/RestaurantList'
import Viewer from './components/Viewer'

import store from './store'
import './App.css';

class App extends Component {
   
  render() {
    return (
      <Provider store={store}>
        <div className="App" >  
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <CheckBoxes />
            <Slider />
          </div>
          <div 
            style={{display: 'flex', backgroundColor: '#eaeaea', margin: '40px 0'}}
          >
            <RestaurantList />
            <Viewer />
          </div>
        </div>
      </Provider>
     );
  } 
}

export default App;
