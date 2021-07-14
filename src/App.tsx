import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";

import Homelink from "./components/homelink/homelink.component";
import Footer from "./components/footer/footer.component";
import Sidemenu from "./components/sidemenu/sidemenu.components";

const App: React.FC = () => {
  return (
    <>
      <Homelink />
      <Sidemenu />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
