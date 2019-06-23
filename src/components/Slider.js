import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCost, updateRating } from '../actions/updateSlider'  
import SliderUI from '@material-ui/lab/Slider';


class Slider extends Component {

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{ height: '100px', width: '300px'}} >
          <SliderUI
            value={this.props.slider.rating}
            min={0}
            max={5}
            onChange={this.props.updateRating.bind(this)}
            aria-labelledby="range-slider"
            valueLabelDisplay="auto"
          />
        </div>
        <div style={{ height: '100px', width: '300px'}}>
          <SliderUI
            value={this.props.slider.cost}
            min={0}
            max={5}
            onChange={this.props.updateCost.bind(this)}
            aria-labelledby="range-slider"
            valueLabelDisplay="auto"
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  slider: state.slider
});

export default connect(mapStateToProps, {updateCost, updateRating})(Slider); 
