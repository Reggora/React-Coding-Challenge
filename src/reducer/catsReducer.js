import { FETCH_CATS } from '../action/types';

const initState = {
  cats: [],
}

export default (state = initState, action) => {
  switch(action.type) {
    case FETCH_CATS:
      return {
        ...state,
        cats: action.payload
      };
    default:
      return state;
  }
};