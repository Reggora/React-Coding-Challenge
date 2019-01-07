import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCat } from '../actions/SelectCat';
import { bindActionCreators } from 'redux';

class CatListContainer extends Component {
	renderList() {
		return this.props.cats.map((cat) => {
			return (
				<li key={cat.name}
				className="list-group-item"
				onClick={() => this.props.selectCat(cat)}>
					<p>{cat.name} {cat.breed} {cat.description}</p>
				</li>
			);
		});
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
		cats: state.cats
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectCat: selectCat}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CatListContainer);