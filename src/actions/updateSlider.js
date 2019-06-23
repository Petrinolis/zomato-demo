import {  UPDATE_RATING, UPDATE_COST } from './types'

export const updateCost = (event, newValue) => dispatch => {
  dispatch({ 
    type: UPDATE_COST,
    value: newValue, 
  })

}
export const updateRating = (event, newValue) => dispatch => {
  dispatch({ 
    type: UPDATE_RATING,
    value: newValue, 
  })
}