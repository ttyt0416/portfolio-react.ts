import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";

import Homelink from "./components/homelink/homelink.component";
import Footer from "./components/footer/footer.component";

const App: React.FC = () => {
  return (
    <>
      <Homelink />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
