import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  requestSingleCat,
  makeCat,
  updateCat,
  destroyCat
} from "../../actions/cats_actions";

import EditForm from "./edit_form";

const mapStateToProps = state => {
  return {
    cat: state.cats
  };
};

const mapDispatchToProps = dispatch => ({
  requestSingleCat: reviewId => dispatch(requestSingleCat(reviewId)),
  makeCat: cat => dispatch(makeCat(cat)),
  updateCat: (spotId, cat) => dispatch(updateCat(spotId, cat)),
  destroyCat: catId => dispatch(destroyCat(catId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditForm)
);
