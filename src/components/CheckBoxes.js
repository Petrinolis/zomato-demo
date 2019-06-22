import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel'

export default class CheckBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        {
          name: 'Dining',
          id: 2,
          checked: true,
        },
        {
          name: 'Take-Away',
          id: 5,
          checked: true,
        },
        {
          name: 'Delivery',
          id: 1,
          checked: true,
        },
        {
          name: 'Pubs & Bars',
          id: 11,
          checked: true,
        },
      ],
      cuisine: [
        {
          name: 'Cafe Food',
          id: 1039,
          checked: true,
        },
        {
          name: 'Asian',
          id: 3,
          checked: true,
        },
        {
          name: 'Chinese',
          id: 25,
          checked: true,
        },
        {
          name: 'Coffee and Tea',
          id: 161,
          checked: true,
        },
        {
          name: 'Bakery',
          id: 5,
          checked: true,
        },
        {
          name: 'Pub Food',
          id: 983,
          checked: true,
        },
        {
          name: 'Pizza',
          id: 82,
          checked: true,
        },
        {
          name: 'Italian',
          id: 55,
          checked: true,
        },
        {
          name: 'Fast Food',
          id: 40,
          checked: true,
        },
        {
          name: 'Sandwich',
          id: 304,
          checked: true,
        },
      ],
      otherCuisines: {
        name: 'Other',
        checked: true,
      },
    }
  }

  updateCuisine(id) {
    this.setState(state => ({
      cuisine: state.cuisine.map( item => item.id === id ? { ...item, checked: !item.checked } : item )
    }));
  }

  updateCategory(id) {
    this.setState(state => ({
      category: state.category.map( item => item.id === id ? { ...item, checked: !item.checked } : item )
    }));
  }

  updateOther() {
    this.setState({otherCuisines: {name: 'Other', checked: !this.state.otherCuisines.checked } })
  }

  render() {
    let catItems = this.state.category.map( item => (
      <FormControlLabel 
        key={item.id}
        control ={
          <Checkbox    
            checked={item.checked}
            onChange={this.updateCategory.bind(this, item.id)}
            color="primary"
          />
        }
        label={item.name}
      />
    ))
    let cuisineItems = this.state.cuisine.map( item => (
      <FormControlLabel 
        key={item.id}
        control ={
          <Checkbox    
            checked={item.checked}
            onChange={this.updateCuisine.bind(this, item.id)}
            color="primary"
          />
        }
        label={item.name}
      />
    ))

    return (
      <div style={{display: 'flex'}} >
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {catItems}
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'auto auto auto'}}>
          {cuisineItems}
          <FormControlLabel 
            control ={
              <Checkbox    
                checked={this.state.otherCuisines.checked}
                onChange={this.updateOther.bind(this)}
                color="primary"
              />
            }
            label={this.state.otherCuisines.name}
          />
        </div>
      </div>
    )
  }
}
