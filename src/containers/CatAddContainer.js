import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCat } from '../actions/AddCat'
import { bindActionCreators } from 'redux'

class CatAddContainer extends Component {
	constructor(props) {
		super(props);

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
							className="btn btn-primary"
							onClick={() => this.onAddCat()}>Add Cat</button>
				</div>
			</div>
			</div>
			</div>
		)
	}

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

	onNameChange(name) {
		this.setState({name : name})
	}

	onBreedChange(breed) {
		this.setState({breed: breed})
	}

	onDescriptionChange(description) {
		this.setState({description: description})
	}
}

function mapStateToProps(state) {
	return {
		cats: state.cats
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addCat: addCat}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CatAddContainer);