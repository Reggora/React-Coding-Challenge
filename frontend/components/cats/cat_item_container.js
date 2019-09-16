import { connect } from "react-redux";
import { withRouter } from "react-router";
import CatItem from "./CatItem";
import {
  requestAllCats,
  requestSingleCat,
  makeCat,
  updateCat,
  destroyCat
} from "../../actions/cats_actions";

const mapStateToProps = state => {
  return {
    cat: state.cats
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllCats: () => dispatch(requestAllCats()),
  requestSingleCat: catId => dispatch(requestSingleCat(catId)),
  makeCat: payload => dispatch(makeCat(payload)),
  updateCat: payload => dispatch(updateCat(payload)),
  destroyCat: catId => dispatch(destroyCat(catId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CatItem)
);
