import { UPDATE_LIST, LOAD_MORE } from './types'
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

  dispatch({
    type: LOAD_MORE,
    category: categoryIds.toString(),
    cuisine: cuisineIds.toString(),
    start: getState.list
  })
}