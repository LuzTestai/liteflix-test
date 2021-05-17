import { SET_OUTSTANDING, SET_UPCOMING, SET_POPULAR } from "../actionTypes";
import moviesService from '../../services/movies'

export const getOutstanding = () => async (dispatch) => {
  const outstanding = await moviesService.getOutstanding()
  dispatch({
    type: SET_OUTSTANDING,
    payload: outstanding
  })
}
export const getUpcoming = () => async (dispatch) => {
  const upcoming = await moviesService.getUpcoming()
  dispatch({
    type: SET_UPCOMING,
    payload: upcoming
  })
}
export const getPopular = () => async (dispatch) => {
  const popular = await moviesService.getPopular()
  dispatch({
    type: SET_POPULAR,
    payload: popular
  })
}

// export const getComment = (id) => async (dispatch) => {
//   const comment = await commentService.getCommentById(id)
//   dispatch({
//     type: SET_COMMENT,
//     payload: comment
//   })
// }