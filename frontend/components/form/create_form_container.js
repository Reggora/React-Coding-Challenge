import { connect } from "react-redux";
import { withRouter } from "react-router";
import CreateForm from "./create_form";
import { makeCat } from "../../actions/cats_actions";

const mapStateToProps = state => ({
  cats: state.cats
});

const mapDispatchToProps = dispatch => ({
  makeCat: cat => dispatch(makeCat(cat))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateForm)
);
