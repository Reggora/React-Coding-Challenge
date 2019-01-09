import React, { Component } from 'react';
import CatAddContainer from './containers/CatAddContainer'
import CatActionContainer from './containers/CatActionContainer'
import { Provider } from "react-redux";
import store from "./store";

// React EntryPoint, react-redux provider linked to store
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <h1>Jack's Cat Tracker</h1>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-md-12">
              <CatAddContainer />
            </div>
          </div>
          <div>
            <CatActionContainer />
          </div>
        </div>
        
      </Provider>
    );
  }
}
