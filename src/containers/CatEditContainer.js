import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleEdit } from '../actions/ToggleEdit'
import { saveCat } from '../actions/SaveCat'
import { bindActionCreators } from 'redux'

class CatEditContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name: this.props.cat.name,
			breed: this.props.cat.breed,
			description: this.props.cat.description
		};
	}

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
								className="btn btn-success btn-block"
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

	onNameChange(name) {
		this.setState({name : name})
	}

	onBreedChange(breed) {
		this.setState({breed: breed})
	}

	onDescriptionChange(description) {
		this.setState({description: description})
	}

	onSaveCat() {
		if(this.state.name && this.state.breed && this.state.description){
			const cat = {
				name: this.state.name,
				breed: this.state.breed,
				description: this.state.description
			}
			this.props.saveCat(this.props.cat, cat)
		}
	}
}


function mapStateToProps(state) {
	return {
		cat: state.catSelected
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ toggleEdit: toggleEdit, saveCat: saveCat}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CatEditContainer);