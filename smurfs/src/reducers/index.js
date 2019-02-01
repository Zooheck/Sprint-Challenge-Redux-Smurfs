/*
  Be sure to import in all of the action types from `../actions`
*/
import {LOADING, ERROR, SUCCESS, ADDING, ADD_SUCCESS} from '../actions/index'


const initialState = {
  smurfs: [],
  isLoading: false,
  isAdding: false,
  isDeleting: false,
  isUpdating: false,
  error: null
}
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      }
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    case ADDING:
      return {
        ...state,
        isAdding: true
      }
    case ADD_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isAdding: false
      }
    default: 
      return state
  }
}
export default rootReducer
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
