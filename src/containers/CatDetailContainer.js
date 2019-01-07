import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleEdit } from '../actions/ToggleEdit'
import { bindActionCreators } from 'redux'


class CatDetailContainer extends Component {

	render() {
		if(!this.props.cat){
			return (
				<p>No Selected Cat</p>
			)
		}
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
							<button type="button" className="btn btn-danger btn-block">Delete</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		cat: state.catSelected
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleEdit: toggleEdit}, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(CatDetailContainer);