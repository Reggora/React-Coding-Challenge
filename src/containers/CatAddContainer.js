import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCat } from '../actions/AddCat'
import { bindActionCreators } from 'redux'

class CatAddContainer extends Component {
	constructor(props) {
		super(props);
		// Initialize an empty state
		this.state = {
			name: '',
			breed: '',
			description: ''
		};
	}

	render() {
		return (
			<div className="card">
  				<div className="card-body">
					<div className="row">
						<div className="col-md-3">
							<div className="input-group">
  								<div className="input-group-prepend">
    								<span className="input-group-text">Name</span>
								</div>
  								<input
  									type="text"
									value={this.state.name}
									onChange={event => this.onNameChange(event.target.value)}
  									className="form-control"/>
							</div>
						</div>
						<div className="col-md-3">
							<div className="input-group">
  								<div className="input-group-prepend">
    								<span className="input-group-text">Breed</span>
								</div>
  								<input 
  									type="text"
  									value={this.state.breed}
  									onChange={event => this.onBreedChange(event.target.value)}
  									className="form-control"/>
							</div>
						</div>
						<div className="col-md-3">
							<div className="input-group">
  								<div className="input-group-prepend">
    								<span className="input-group-text">Description</span>
								</div>
  								<input
  						 			type="text"
									value={this.state.description}
									onChange={event => this.onDescriptionChange(event.target.value)}
  									className="form-control"/>
								</div>
						</div>
						<div className="col-md-3">
							<button type="button" 
								className={this.styleAddButton()}
								onClick={() => this.onAddCat()}
								disabled={this.isButtonDisabled()}>Add Cat</button>
						</div>
					</div>
				</div>
			</div>
		)
	}

	// styles the add button depending on the state's validity
	styleAddButton() {
		if(this.state.name && this.state.breed && this.state.description){
			return "btn btn-success"
		} else {
			return "btn btn-danger"
		}
	}
	// Disable a button if the state has no data for any required field
	isButtonDisabled() {
		return !(this.state.name && this.state.breed && this.state.description)
	}

	// checks if the state is valid, then creates a cat to send to the action creator
	// finally resets the state back to empty inputs
	onAddCat() {
		if(this.state.name && this.state.breed && this.state.description){
			const cat = {
				name: this.state.name,
				breed: this.state.breed,
				description: this.state.description
			}
			this.props.addCat(cat)
			this.setState({name: '', breed: '', description: ''})
		}
	}

	// handler for changes on the name input
	onNameChange(name) {
		this.setState({name : name})
	}

	// handler for changes on the breed input
	onBreedChange(breed) {
		this.setState({breed: breed})
	}

	// handler for the changes on the description input
	onDescriptionChange(description) {
		this.setState({description: description})
	}
}

// links the redux state for the field cats to the local prop cats
function mapStateToProps(state) {
	return {
		cats: state.cats
	}
}


// links the add cat function to the props 
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addCat: addCat}, dispatch)
}

// exports the react-redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(CatAddContainer);