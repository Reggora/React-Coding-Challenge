import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CatIndex from "./CatIndex";
import {
  requestAllCats,
  requestSingleCat,
  makeCat,
  destroyCat
} from "../../actions/cats_actions";

const mapStateToProps = state => {
  return {
    cats: state.cats,
    errors: state.cats.errors
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllCats: () => dispatch(requestAllCats()),
  requestSingleCat: catId => dispatch(requestSingleCat(catId)),
  makeCat: payload => dispatch(makeCat(payload)),
  destroyCat: catId => dispatch(destroyCat(catId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CatIndex)
);
