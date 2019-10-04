import React, { Component } from 'react';
import _ from 'lodash';
import Cat from './Cat';

class CatList extends Component {
  render() {
    const cats = this.props.cats;
    const catsList = _.map(cats,(cat,key) => {
      return <Cat
        cat={cat}
        catId={key}
        key={key}
      />
    })
    return (
      <div className="cat-list">
        {catsList}
      </div>
    );
  }
}

export default CatList;