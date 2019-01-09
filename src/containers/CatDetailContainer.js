import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleEdit } from '../actions/ToggleEdit'
import { deleteCat } from '../actions/DeleteCat'
import { bindActionCreators } from 'redux'

// Container that displays the data for the selected cat
class CatDetailContainer extends Component {

	// Return the component for the cat that is selected
	render() {
		return (
			<div className="card">
  				<div className="card-body">
					<div className="row justify-content-md-center">
						<div className="col-md-4">
							<h4>Name:</h4>
						</div>
						<div className="col-md-8">
							<p>{this.props.cat.name}</p>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-md-4">
							<h4>Breed:</h4>
						</div>
						<div className="col-md-8">
							<p>{this.props.cat.breed}</p>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-md-4">
							<h4>Description:</h4>
						</div>
						<div className="col-md-8">
							<p>{this.props.cat.description}</p>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-md-6">
							<button 
								type="button"
								className="btn btn-warning btn-block"
								onClick={() => {this.props.toggleEdit()}}>Edit</button>
						</div>
						<div className="col-md-6">
							<button 
								type="button" 
								className="btn btn-danger btn-block"
								onClick={() => {this.props.deleteCat(this.props.cat)}}>Delete</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

// Links the state from redux for catSelected to the props for cat
function mapStateToProps(state) {
	return {
		cat: state.catSelected
	}
}

// Links the dispatch actions for toggling edit and deletion from redux state to props
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleEdit: toggleEdit, deleteCat: deleteCat}, dispatch)
}


// export the react-redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(CatDetailContainer);