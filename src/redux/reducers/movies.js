import { SET_OUTSTANDING, SET_UPCOMING, SET_POPULAR } from "../actionTypes";

const inicialState = {
  outstanding: [],
  upcoming: [],
  popular: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = inicialState, action) => {
  switch (action.type) {
    case SET_OUTSTANDING:
      return {
        ...state,
        outstanding: action.payload
      }
    case SET_UPCOMING:
      return {
        ...state,
        upcoming: action.payload
      }
    case SET_POPULAR:
      return {
        ...state,
        popular: action.payload
      }
    default:
      return state;
  }
}