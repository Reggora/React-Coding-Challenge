import React, { Component } from 'react';
import CatList from './CatList';
import CatForm from './CatForm';
import { connect } from 'react-redux';
import { fetchCats } from '../action';

class CatSuperList extends Component {
  constructor(props) {
    super(props);
    this.props.fetchCats();
  }

  render() {
    const cats = this.props.cats;
    return (
      <div>
        <CatForm />
        <CatList cats={cats.cats} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cats: state.cats,
  modifiedCat: state.modifiedCat
})

export default connect(mapStateToProps, {fetchCats})(CatSuperList);