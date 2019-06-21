import React, { Component } from 'react';
import SliderUI from '@material-ui/lab/Slider';


class Slider extends Component {

  handleChange = (event, newValue) => {
    console.log(newValue);
  };

  render() {

    return (
      <div>
        <SliderUI
          value={this.props.value}
          min={0}
          max={5}
          onChange={this.handleChange}
          valueLabelDisplay="auto"
        />
      </div>
    )
  };
}

export default Slider; 
