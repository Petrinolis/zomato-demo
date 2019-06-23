import { UPDATE_VIEWER } from '../actions/types'

const initialState = {
  
}

export default function(state = initialState, action) {
  switch(action.type){
    case UPDATE_VIEWER:
      return {
        image: action.image,
        name: action.name,
        address: action.address,
        booking: action.booking,
        delivery: action.delivery,
        cuisines: action.cuisines,
        phone: action.phone,
        hours: action.hours,
      }
    default:
      return state;
  }
}