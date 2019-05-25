import { ADD_CAT, EDIT_CAT, DELETE_CAT } from '../constants/action-types';

export function addCat(payload) {
  return { type: ADD_CAT, payload };
}

export function editCat(payload) {
  return { type: EDIT_CAT, payload };
}

export function deleteCat(payload) {
  return { type: DELETE_CAT, payload };
}
