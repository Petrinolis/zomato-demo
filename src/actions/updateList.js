import { UPDATE_LIST, LOAD_MORE, LOADING } from './types'
import Zomato from 'zomato.js'

const zomato = new Zomato('d9ab5b5022882f3c6585c36d1d1766bd');

export const updateList = () => async (dispatch, getState) => {
  const cuisineIds = getState().checkBoxes.cuisine.map(item => item.id).toString()
  const categoryIds = getState().checkBoxes.category.map(item => item.id).toString()
  zomato.search({
    city_id: 297,
    start: 0,
    count: 20,
    category: categoryIds,
    cuisines: cuisineIds,
  })
  .then(data => {
      dispatch({
        type: UPDATE_LIST,
        restaurants: data.restaurants,
      })
    }       
  )
} 

export const loadMore = () => (dispatch, getState) => {
  const cuisineIds = getState().checkBoxes.cuisine.map(item => item.id)
  const categoryIds = getState().checkBoxes.category.map(item => item.id)
  
  zomato.search({
    city_id: 297,
    start: getState().list.start + 20,
    count: 20,
    category: categoryIds,
    cuisines: cuisineIds,
  })
  .then(data => {
      dispatch({
        type: LOAD_MORE,
        restaurants: data.restaurants,
      })
    }       
  )
}

export const loading = (loading) => dispatch => {
  dispatch({
    type: LOADING,
    loading,
  })
}