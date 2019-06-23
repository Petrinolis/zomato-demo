import { UPDATE_LIST, LOAD_MORE, LOADING, UPDATE_VIEWER } from './types'
import Zomato from 'zomato.js'

const zomato = new Zomato('d9ab5b5022882f3c6585c36d1d1766bd');

export const updateList = () => async (dispatch, getState) => {
  const cuisineIds = getState().checkBoxes.cuisine.map(item => item.checked ? item.id : '').toString()
  const categoryIds = getState().checkBoxes.category.map(item => item.checked ? item.id : '').toString()
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
      dispatch({
        type: UPDATE_VIEWER,
        image: data.restaurants[0].featured_image,
        name: data.restaurants[0].name,
        address: data.restaurants[0].location.address + ' '  + 
                 data.restaurants[0].location.locality_verbose,
        booking: data.restaurants[0].has_table_booking,
        delivery: data.restaurants[0].has_online_delivery,
        cuisines: data.restaurants[0].cuisines,
        phone: data.restaurants[0].phone_numbers,
        hours: data.restaurants[0].timings,
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

export const updateViewer = (item) => (dispatch, getState) => {
  let restaurant = getState().list.restaurants.find( i => i.id === item )
  dispatch({
    type: UPDATE_VIEWER,
    image: restaurant.featured_image,
    name: restaurant.name,
    address: restaurant.location.address + ' '  + 
             restaurant.location.locality_verbose,
    booking: restaurant.has_table_booking,
    delivery: restaurant.has_online_delivery,
    cuisines: restaurant.cuisines,
    phone: restaurant.phone_numbers,
    hours: restaurant.timings,
  })
}