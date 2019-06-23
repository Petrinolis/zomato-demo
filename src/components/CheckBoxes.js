import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateCuisine, updateCategory, updateOtherCategory } from '../actions/updateCheckBoxes' 
import { updateList } from '../actions/updateList'
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'

class CheckBoxes extends Component {
  componentDidUpdate() {
    this.props.updateList()
  }

  render() {
    let catItems = this.props.checkBoxes.category.map( item => (
      <FormControlLabel 
        key={item.id}
        control ={
          <Checkbox    
            checked={item.checked}
            onChange={this.props.updateCategory.bind(this, item.id)}
            color="primary"
          />
        }
        label={item.name}
      />
    ))
    let cuisineItems = this.props.checkBoxes.cuisine.map( item => (
      <FormControlLabel 
        key={item.id}
        control ={
          <Checkbox    
            checked={item.checked}
            onChange={this.props.updateCuisine.bind(this, item.id)}
            color="primary"
          />
        }
        label={item.name}
      />
    ))

    return (
      <div style={{display: 'flex'}} >
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Typography variant={'overline'} gutterBottom>
            CATEGORY
          </Typography>
          {catItems}
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}} >
          <Typography variant={'overline'} gutterBottom>
            CUISINE
          </Typography>
          <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto'}}>
            {cuisineItems}
            <FormControlLabel 
              control ={
                <Checkbox    
                  checked={this.props.checkBoxes.otherCuisines.checked}
                  onChange={this.props.updateOtherCategory.bind(this)}
                  color="primary"
                />
              }
              label={this.props.checkBoxes.otherCuisines.name}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  checkBoxes: state.checkBoxes
});

export default connect(mapStateToProps, {updateCategory, updateCuisine, updateOtherCategory, updateList})(CheckBoxes);