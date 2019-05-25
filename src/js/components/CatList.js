import React from 'react';
import { connect } from 'react-redux';

import CatListItem from './CatListItem';

const mapStateToProps = state => {
  return { cats: state.cats };
};

const ConnectedCatList = ({ cats }) => {
  // show welcome message if the cats list is empty
  if (cats.length < 1) {
    return (
      <div className="column is-half">
        <p className="has-text-centered is-italic">"Add cat" to start your list</p>
      </div>
    );
  }

  // render cats 
  return (
      <div className="column is-half">
        {cats.map(cat => (
          <CatListItem key={cat.id} cat={cat} />
        ))}
      </div>
  );
};

const CatList = connect(mapStateToProps)(ConnectedCatList);
export default CatList;
