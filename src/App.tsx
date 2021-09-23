import React, { useState, useEffect } from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import { authService } from "./firebase/firebase";

import Homepage from "./pages/homepage/homepage.component";
import Communitypage from "./pages/communitypage/communitypage.component";
import Postpage from "./pages/postpage/postpage.components";
import Authpage from "./pages/authpage/authpage.component";
import Detailpage from "./pages/detailpage/detailpage.component";
import Examplepage from "./pages/examplepage/examplepage.component";

import Homelink from "./components/homelink/homelink.component";
import Footer from "./components/footer/footer.component";
import Sidemenu from "./components/sidemenu/sidemenu.component";

const App: React.FC = () => {
  //adding auth service from firebase authentication
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState<null | {
    displayName: string | null;
    uid: string | null;
  }>(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user!.displayName,
      uid: user!.uid,
    });
  };
  return (
    <div className="app">
      {/* <div className="app__container"> */}
      <Homelink />
      <Sidemenu isLoggedIn={Boolean(userObj)} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/example" component={Examplepage} />
        {/* if user is not logged in*/}
        {userObj === null ? (
          <>
            <Route path="/community">
              <Redirect to="/" />
            </Route>
            <Route exact path="/auth" component={Authpage} />
            <Route exact path="/post">
              <Redirect to="/" />
            </Route>
          </>
        ) : (
          <>
            {/* if user is logged in*/}
            <Route exact path="/community" component={Communitypage} />
            <Route path="/community/:id">
              <Detailpage uid={userObj.uid!} />
            </Route>
            <Route exact path="/auth">
              <Redirect to="/" />
            </Route>
            <Route exact path="/post">
              <Postpage uid={userObj.uid} />
            </Route>
          </>
        )}
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
