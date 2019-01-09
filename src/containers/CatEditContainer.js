import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleEdit } from '../actions/ToggleEdit'
import { saveCat } from '../actions/SaveCat'
import { bindActionCreators } from 'redux'


// A container for editing the selected cat
class CatEditContainer extends Component {

	constructor(props) {
		super(props);
		// Initialize the state for the cat data
		// to the incoming cat props
		this.state = {
			name: this.props.cat.name,
			breed: this.props.cat.breed,
			description: this.props.cat.description
		};
	}
	// Return the component for editing a cat
	render() {
		return (
			<div className="card">
  				<div className="card-body">
					<div className="row justify-content-md-center">
						<div className="col-md-4">
							<h4>Name:</h4>
						</div>
						<div className="col-md-8">
							<input
  								type="text"
								value={this.state.name}
								onChange={event => this.onNameChange(event.target.value)}
  								className="form-control"/>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-md-4">
							<h4>Breed:</h4>
						</div>
						<div className="col-md-8">
							<input 
  								type="text"
  								value={this.state.breed}
  								onChange={event => this.onBreedChange(event.target.value)}
  								className="form-control"/>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-md-4">
							<h4>Description:</h4>
						</div>
						<div className="col-md-8">
							<input
  						 		type="text"
								value={this.state.description}
								onChange={event => this.onDescriptionChange(event.target.value)}
  								className="form-control"/>
						</div>
					</div>
					<div className="row justify-content-md-center">
						<div className="col-md-6">
							<button 
								type="button"
								className={this.styleSaveButton()}
								disabled={this.isDisabled()}
								onClick={() => {this.onSaveCat()}}>Save</button>
						</div>
						<div className="col-md-6">
							<button 
							 	type="button"
							 	className="btn btn-secondary btn-block"
							 	onClick={() => {this.props.toggleEdit()}}>Cancel</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
	// Determines the style for the save button depending on the state
	styleSaveButton(){
		if(this.state.name && this.state.breed && this.state.description){
			return "btn btn-success btn-block"
		} else {
			return "btn btn-danger btn-block"
		}
	}
	// returns true if parts of the state are empty
	isDisabled(){
		return !(this.state.name && this.state.breed && this.state.description)

	}

	// Handlers for the different text inputs
	onNameChange(name) {
		this.setState({name : name})
	}

	onBreedChange(breed) {
		this.setState({breed: breed})
	}

	onDescriptionChange(description) {
		this.setState({description: description})
	}

	// Saves the cat
	onSaveCat() {
		// If we have a name, continue saving
		if(this.state.name && this.state.breed && this.state.description){
			// create a cat from the new cat data in local state
			const cat = {
				name: this.state.name,
				breed: this.state.breed,
				description: this.state.description
			}
			// call the action creator with the old cat
			// and the newly created cat
			this.props.saveCat(this.props.cat, cat)
		}
	}
}

// Link the redux state for catSelected to the prop cat
function mapStateToProps(state) {
	return {
		cat: state.catSelected
	}
}

// Link the toggleEdit and saveCat functions to the local props
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleEdit: toggleEdit, saveCat: saveCat}, dispatch)
}

// export the component connected to redux
export default connect(mapStateToProps, mapDispatchToProps)(CatEditContainer);