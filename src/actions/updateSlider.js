import {  UPDATE_RATING, UPDATE_COST, UPDATE_VISIBLE } from './types'

function getVisible(slider, restaurants) {
  let visible = restaurants.map( item => {
    if (
      item.price_range >= slider[0] &&
      item.price_range <= slider[1] &&
      item.user_rating.aggregate_rating >= slider[2] && 
      item.user_rating.aggregate_rating <= slider[3]
    ) return 1
    else 
      return 0
  })
  return visible
}

export const updateCost = (event, newValue) => (dispatch, getState) => {
  dispatch({ 
    type: UPDATE_COST,
    value: newValue,
  })
  dispatch({ 
    type: UPDATE_VISIBLE,
    visible: getVisible([ ...newValue, ...getState().slider.rating], getState().list.restaurants)
  })

}
export const updateRating = (event, newValue) => (dispatch, getState) => {
  dispatch({ 
    type: UPDATE_RATING,
    value: [
      Math.round(newValue[0]* 10) / 10,
      Math.round(newValue[1]* 10) / 10
    ]
  })
  dispatch({ 
    type: UPDATE_VISIBLE,
    visible: getVisible([...getState().slider.cost, ...newValue], getState().list.restaurants)
  })
}