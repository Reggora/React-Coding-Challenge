import React, { Component } from 'react';
import { connect } from 'react-redux';
import CatDetailContainer from './CatDetailContainer'
import CatListContainer from './CatListContainer'
import CatEditContainer from './CatEditContainer'


// Parent container that houses the list container, detail container, edit container
class CatActionContainer extends Component {

	render() {
		// Determine which component to show based on the edit flag and the selected cat prop
		let container;
		if(this.props.cat && this.props.edit){
			container = <CatEditContainer />
		} else if (this.props.cat && !this.props.edit){
			container = <CatDetailContainer />
		} else {
			container = (<div className="row justify-content-md-center">
						<h3>Select a Cat from the list to Begin</h3></div>)
		}
		// If the cats array has elements in it,
		// return the list and edit or detail containers
		if(!(this.props.cats.length === 0)){
			return (
				<div className="row">
          			<div className="col-sm-6">
            			<CatListContainer />
          			</div>
          			<div className="col-sm-6">
          				{container}
          			</div>
        		</div>
        	)
        // If the cats array has no elements, display text to the user to add cats
		} else {
			return (
				<div className="row justify-content-md-center">
					<h1>Add a cat to begin</h1>
				</div>
			)
		}
	}
}

// link the cats and edit pars of redux state to props 
function mapStateToProps(state) {
	return {
		cats: state.cats,
		edit: state.edit,
		cat: state.catSelected
	}
}

// export the redux connected container
export default connect(mapStateToProps)(CatActionContainer);