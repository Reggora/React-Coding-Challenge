import * as APIUtil from "../util/api_util";

export const RECEIVE_ALL_CATS = "RECEIVE_ALL_CATS";
export const RECEIVE_SINGLE_CAT = "RECEIVE_SINGLE_CAT";
export const CREATE_CAT = "CREATE_CAT";
export const DELETE_CAT = "DELETE_CAT";
export const RECEIVE_CAT_ERRORS = "RECEIVE_CAT_ERRORS";

export const requestAllCats = () => dispatch => {
  return APIUtil.fetchAllCats().then(
    cats => {
      dispatch(receiveAllCats(cats));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const requestSingleCat = id => dispatch => {
  return APIUtil.fetchSingleCat(id).then(
    cat => {
      dispatch(receiveSingleCat(cat));
      return cat;
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const makeCat = cat => dispatch => {
  return APIUtil.makeCat(cat).then(
    cat => {
      dispatch(requestSingleCat(cat.id));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateCat = (catId, cat) => dispatch => {
  return APIUtil.updateCat(cat).then(
    cat => {
      dispatch(requestSingleCat(catId));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const destroyCat = catId => dispatch =>
  APIUtil.destroyCat(catId).then(
    cat => {
      dispatch(deleteCat(cat.id));
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const receiveAllCats = cats => ({
  type: RECEIVE_ALL_CATS,
  cats
});

export const receiveSingleCat = payload => {
  return {
    type: RECEIVE_SINGLE_CAT,
    payload
  };
};

export const createCat = cat => ({
  type: CREATE_CAT,
  cat
});

export const deleteCat = catId => ({
  type: DELETE_CAT,
  catId
});

export const receiveCatErrors = errors => ({
  type: RECEIVE_CAT_ERRORS,
  errors
});
