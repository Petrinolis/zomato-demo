import { UPDATE_LIST, LOAD_MORE, LOADING } from '../actions/types'

const initialState = {
  start: 0,
  restaurants : [],
  loading: false,
}

export default function(state = initialState, action ){
  switch(action.type){
    case UPDATE_LIST: 
      return {
        start: 0,
        restaurants: action.restaurants,
        loading: false,
      }
      case LOAD_MORE:
        return {
          start: state.start + 20,
          restaurants: [...state.restaurants, ...action.restaurants],
          loading: false,
        }
      case LOADING:
        return {
          ...state,
          loading: action.loading
        }
    default: 
      return state
    }
  }
