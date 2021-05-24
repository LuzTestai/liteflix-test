import { SET_MY_MOVIE } from '../actionTypes'

const inicialState = {
  myList: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = inicialState, action) => {
  switch (action.type) {
    case SET_MY_MOVIE:
      return {
        ...state,
        myList: [...state.myList, action.payload],
      }
    default:
      return state
  }
}
