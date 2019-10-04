import { FETCH_CATS } from './types';
import { catsRef } from '../config/firebase';

export const fetchCats = () => async dispatch => {
  catsRef.on("value", snapshot => {
    dispatch({
      type: FETCH_CATS,
      payload: snapshot.val()
    });
  });
};

export const addCat = (newCat) => async dispatch => {
  catsRef.push().set(newCat);
}

export const removeCat = (removeCatId) => async dispatch => {
  catsRef.child(removeCatId).remove();
}

export const editCat = (editCatId, modifiedCat) => async dispatch => {
  catsRef.child(editCatId).update(modifiedCat);
}