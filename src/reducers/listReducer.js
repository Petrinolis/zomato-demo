import { UPDATE_LIST, LOAD_MORE, LOADING, UPDATE_VISIBLE } from '../actions/types'

const initialState = {
  start: 0,
  restaurants : [],
  loading: false,
  visible: [],
}

export default function(state = initialState, action ){
  switch(action.type){
    case UPDATE_LIST: 
      return {
        ...state,
        start: 0,
        restaurants: action.restaurants,
        loading: false,
      }
      case LOAD_MORE:
        return {
          ...state,
          start: state.start + 20,
          restaurants: [...state.restaurants, ...action.restaurants],
          loading: false,
        }
      case UPDATE_VISIBLE: 
        return {
          ...state,
          visible: action.visible
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
