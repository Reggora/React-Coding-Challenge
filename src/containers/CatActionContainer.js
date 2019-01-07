import React, { Component } from 'react';
import { connect } from 'react-redux';
import CatDetailContainer from './CatDetailContainer'
import CatListContainer from './CatListContainer'
import CatEditContainer from './CatEditContainer'

class CatActionContainer extends Component {

	render() {
		let container;
		if(this.props.edit){
			container = <div>test</div>
		} else {
			container = <CatDetailContainer />
		}

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
		} else {
			return (
				<div className="row justify-content-md-center">
					<h1>Add a cat</h1>
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		cats: state.cats,
		edit: state.edit
	}
}

export default connect(mapStateToProps)(CatActionContainer);