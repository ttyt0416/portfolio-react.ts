import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  );
};

export default App;
