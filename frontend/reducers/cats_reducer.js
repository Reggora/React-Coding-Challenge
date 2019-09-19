import {
  RECEIVE_ALL_CATS,
  RECEIVE_SINGLE_CAT,
  CREATE_CAT,
  DELETE_CAT
} from "../actions/cats_actions";

const catsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  switch (action.type) {
    case RECEIVE_ALL_CATS:
      return Object.assign(newState, action.cats);
    case RECEIVE_SINGLE_CAT:
      return action.payload;
    case CREATE_CAT:
      return action.cat;
    case DELETE_CAT:
      let updatedState = Object.assign({}, state);
      delete updatedState[action.catId];
      return updatedState;
    default:
      return state;
  }
};

export default catsReducer;
