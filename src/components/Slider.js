import React, { Component } from 'react';
import SliderUI from '@material-ui/lab/Slider';


class Slider extends Component {
  constructor(props){
    super(props);
    this.state = {
      rating: [0, 5],
      cost: [0, 5],
    }
  }

  handleChange = (name, event, newValue) => {
    this.setState({ [name]: newValue });
  }

  render() {

    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{ height: '100px', width: '300px'}} >
          <SliderUI
            value={this.state.rating}
            min={0}
            max={5}
            onChange={this.handleChange.bind(this, 'rating')}
            valueLabelDisplay="auto"
          />
        </div>
        <div style={{ height: '100px', width: '300px'}}>
          <SliderUI
            value={this.state.cost}
            min={0}
            max={5}
            onChange={this.handleChange.bind(this, 'cost')}
            valueLabelDisplay="auto"
          />
        </div>
      </div>
    )
  }
}

export default Slider; 
