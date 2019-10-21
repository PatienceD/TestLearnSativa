import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import NoMatch from "./pages/NoMatch";
// import HomePage from "./pages/HomePage";
// import Blog from "./pages/Blog";
// import NowHiring from "./pages/NowHiring";
// import FindCannabis from "./pages/FindCannabis";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Router>
          <Navbar />
          {/* <Header /> */}
          <Switch>
            {/* <Route exact path="/HomePage" component={HomePage} />
            <Route exact path="/FindCannabis" component={FindCannabis} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/NowHiring" component={NowHiring} /> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </Router>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
