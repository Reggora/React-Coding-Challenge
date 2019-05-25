import React from 'react';

import NewCatForm from './NewCatForm';
import CatList from './CatList';

function App() {
  return (
    <div className="">
      <section className="hero is-info is-fullheight">
        <div className="hero-head">
          <header className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a href="/#" className="navbar-item">
                  <span className="icon is-large has-text-white">
                    <i className="fas fa-2x fa-paw"></i>
                  </span>
                  <span>
                  </span>
                </a>
              </div>
              <div className="navbar-menu">
                <div className="navbar-end">
                  <a href="/#" className="navbar-item">
                    By Jules Schenkel
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div className="hero-body">
          <div className="container">
            <h1 className="title is-2">
              Keep track of your cats
            </h1>
            <h2 className="subtitle is-4">
              Easily create a list with all of your cats
            </h2>
            <div className="columns">
              <NewCatForm />
              <CatList />
            </div>
          </div>
        </div>

        <div className="hero-foot">
        </div>
      </section>
    </div>
  );
}

export default App;
