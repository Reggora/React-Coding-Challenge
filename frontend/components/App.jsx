import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Splash from "./pages/Splash";
import CatItem from "./cats/cat_item_container";
import CreateForm from "./form/create_form_container";
import EditForm from "./form/edit_form_container";

const App = () => {
  return (
    <div className="app-container">
      <Fragment>
        <Switch>
          <Route path="/new" component={CreateForm} />
          <Route path="/cats/:catId/edit" component={EditForm} />
          <Route path="/cats/:catId" component={CatItem} />
          <Route exact path="/" component={Splash} />
        </Switch>
      </Fragment>
    </div>
  );
};

export default App;
