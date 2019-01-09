import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCat } from '../actions/SelectCat';
import { bindActionCreators } from 'redux';
import { catsEqual } from '../utilities/catsEqual'

class CatListContainer extends Component {
	renderList() {
		return this.props.cats.map((cat) => {
			return (
				<li key={cat.name + cat.breed + cat.description}
				className={this.style(cat)}
				onClick={() => this.props.selectCat(cat)}>
					<div className="row justify-content-md-center">
						<div className="col-md-4">
							<p>Name : {cat.name} </p>
						</div>
						<div className="col-md-4">
							<p>Breed : {cat.breed} </p>
						</div>
						<div className="col-md-4">
							<p>Description: {cat.description}</p>
						</div>
					</div>
				</li>
			);
		});
	}

	// function used to determine the style of the list item
	// the li with the selected cat will appear blue
	style(cat) {
		if(this.props.selectedCat){
			if(catsEqual(cat, this.props.selectedCat)){
				return "list-group-item list-group-item-action active"
			}
		}
		return "list-group-item list-group-item-action"
	}


	render() {
		if(this.props.cats.length === 0){
			return (
				<div>Loading</div>
			)
		} else {
			return (
				<ul className="list-group">
					{this.renderList()}
				</ul>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		cats: state.cats,
		selectedCat: state.catSelected
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectCat: selectCat}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CatListContainer);