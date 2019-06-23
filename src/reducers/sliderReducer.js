import { UPDATE_COST, UPDATE_RATING } from '../actions/types'

const initialState = {
  rating: [0, 5],
  cost: [0, 5],
}

export default function(state = initialState, action) {
  switch(action.type){
    case UPDATE_COST:
      return {
        ...state,
          cost: action.value
      } 
    case UPDATE_RATING:
      return {
        ...state,
          rating: action.value
      }
    default:
      return state;
  }
}