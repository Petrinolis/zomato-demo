import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCost, updateRating } from '../actions/updateSlider' 
import Typography from '@material-ui/core/Typography'
import SliderUI from '@material-ui/lab/Slider';


class Slider extends Component {

  render() {
    const ratingMarks = [
      {
        value: 0,
        label: '0'
      },
      {
        value: 5,
        label: 5,
      }
    ]
    const costMarks = [
      {
        value: 1,
        label: '$'
      },
      {
        value: 2,
        label: '$$'
      },
      {
        value: 3,
        label: '$$$'
      },
      {
        value: 4,
        label: '$$$$',
      }
    ]
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{ height: '100px', width: '300px'}} >
          <Typography variant={'overline'} gutterBottom>
            RATING
          </Typography>
          <SliderUI
            value={this.props.slider.rating}
            min={0}
            max={5}
            step={0.1}
            onChange={this.props.updateRating.bind(this)}
            aria-labelledby="range-slider"
            valueLabelDisplay="auto"
            marks={ratingMarks}
          />
        </div>
        <div style={{ height: '100px', width: '300px'}}>
          <Typography variant={'overline'} gutterBottom>
            COST
          </Typography>
          <SliderUI
            value={this.props.slider.cost}
            min={1}
            max={4}
            onChange={this.props.updateCost.bind(this)}
            aria-labelledby="range-slider"
            valueLabelDisplay="auto"
            valueLabelFormat={'$'}
            marks={costMarks}
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
