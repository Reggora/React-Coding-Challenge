import { ADD_CAT, EDIT_CAT, DELETE_CAT } from '../constants/action-types';

const initialState = {
  cats: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CAT:
      return Object.assign({}, state, {
        cats: [
          ...state.cats,
          action.payload
        ]
      });

    case EDIT_CAT:
      // create new cat list with the edited cat
      const catsEdited = state.cats.map((cat) => {
        if (action.payload.id === cat.id) {
          return {
            ...cat,
            name: action.payload.name,
            breed: action.payload.breed,
            description: action.payload.description
          };
        }
        return cat;
      });

      return Object.assign({}, state, {
        cats: catsEdited
      });

    case DELETE_CAT:
      // create new cat list without the deleted cat
      const catsDeleted = state.cats.filter((cat) => {
        if (action.payload.id === cat.id) {
          return false;
        }

        return true;
      });

      return Object.assign({}, state, {
        cats: catsDeleted
      });

    default:
      return state;
  }
}

export default rootReducer;
