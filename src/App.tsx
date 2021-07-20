import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import CommunityPage from "./pages/communitypage/communitypage.components";
import Postpage from "./pages/postpage/postpage.components";

import Homelink from "./components/homelink/homelink.component";
import Footer from "./components/footer/footer.component";
import Sidemenu from "./components/sidemenu/sidemenu.components";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__container">
        <Homelink />
        <Sidemenu />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/community" component={CommunityPage} />
          <Route exact path="/post" component={Postpage} />
        </Switch>
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
