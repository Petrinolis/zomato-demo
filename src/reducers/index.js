import { combineReducers } from 'redux'
import checkBoxesReducer from './checkBoxesReducer'
import sliderReducer from './sliderReducer'
import listReducer from './listReducer'
import viewerReducer from './viewerReducer'

export default combineReducers({
  checkBoxes: checkBoxesReducer,
  slider: sliderReducer,
  list: listReducer,
  viewer: viewerReducer,
});