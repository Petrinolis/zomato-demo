import { UPDATE_CATEGORY, UPDATE_CUISINE, UPDATE_OTHERCATEGORY } from '../actions/types'

const initialState = {
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

export default function(state = initialState, action) {
  switch(action.type){
    case UPDATE_CATEGORY:
      return {
        ...state,
          category: state.category.map( item => item.id === action.id ? { ...item, checked: !item.checked } : item )
      } 
    case UPDATE_CUISINE:
      return {
        ...state,
          cuisine: state.cuisine.map( item => item.id === action.id ? { ...item, checked: !item.checked } : item )
      }
    case UPDATE_OTHERCATEGORY: 
      return {
        ...state,
        otherCuisines: {
          name: 'Other', 
          checked: !state.otherCuisines.checked 
        }
      }
    default:
      return state;
  }
}