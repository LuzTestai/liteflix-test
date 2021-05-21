import { SET_MY_MOVIE } from '../actionTypes'

export const setMyList = (movie) => async (dispatch) => {
  dispatch({
    type: SET_MY_MOVIE,
    payload: movie,
  })
}
