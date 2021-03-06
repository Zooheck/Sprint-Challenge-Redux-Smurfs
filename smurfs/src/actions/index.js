/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'



export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const SUCCESS = 'SUCCESS'

export const ADDING = 'ADDING'
export const ADD_SUCCESS = 'ADD_SUCCESS'

export const DELETING = 'DELETING'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'

export const UPDATING = 'UPDATING'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => dispatch => {
  dispatch({ type: LOADING })
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data})
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error})
    })
}

export const addSmurf = state => dispatch => {
  dispatch({type: ADDING})
  axios
    .post('http://localhost:3333/smurfs', state)
    .then(response => {
      dispatch({type: ADD_SUCCESS, payload: response.data})
    })
    .catch(error => {
        dispatch({type: ERROR, payload: error})
    })
}

export const deleteSmurf = id => dispatch => {
  dispatch({type: DELETING})
  axios
  .delete(`http://localhost:3333/smurfs/${id}`)
  .then(response => {
    dispatch({ type: DELETE_SUCCESS, payload: response.data})
  })
  .catch(error => {
    dispatch({type: ERROR, payload: error})
  })
}
export const toggleUpdate = () => dispatch => {
  dispatch({ type: UPDATING})
}
export const updateSmurf = (id, state) => dispatch => {
  //dispatch({ type: UPDATING})
  axios
  .put(`http://localhost:3333/smurfs/${id}`, state)
  .then(response => {
    dispatch({ type: UPDATE_SUCCESS, payload: response.data})
  })
  .catch(error => {
    dispatch({type: ERROR, payload: error})
  })
}