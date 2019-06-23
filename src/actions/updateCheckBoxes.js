import { UPDATE_CATEGORY, UPDATE_CUISINE, UPDATE_OTHERCATEGORY } from './types';

export const updateCategory = (id) => dispatch => {
  dispatch({ 
    type: UPDATE_CATEGORY,
    id: id 
  })
}

export const updateCuisine = (id) => dispatch => {
  dispatch({ 
    type: UPDATE_CUISINE,
    id: id 
  })
}

export const updateOtherCategory = (id) => dispatch => {
  dispatch({ 
    type: UPDATE_OTHERCATEGORY,
    id: id 
  })
}
