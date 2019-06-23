import { UPDATE_LIST, LOAD_MORE } from '../actions/types'

const initialState = {
  start: 0,
  restaurants : [],
}

export default function(state = initialState, action ){
  switch(action.type){
    case UPDATE_LIST: 
      return {
        start: 0,
        restaurants: action.restaurants
      }
    default: 
      return state
    }
  }
