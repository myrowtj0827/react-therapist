import React from 'react';
import '../src/assets/css/index.css';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import '../src/assets/css/index.css';

import Blog from "./components/Blog";
import BlogArticle from "./components/BlogArticle";
import Directory from "./components/Directory";
import DirectorySearch from "./components/DirectorySearch";
import FeaturesNotes from "./components/FeaturesNotes";
import FeaturesOnlineSession from "./components/FeaturesOnlineSession";
import FeaturesPage from "./components/FeaturesPage";
import FeaturesPayment from "./components/FeaturesPayment";
import FeaturesScheduling from "./components/FeaturesScheduling";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HelpCenter from "./components/HelpCenter";
import HelpArticle from "./components/HelpArticle";
import HelpCenterDetail from "./components/HelpCenterDetail";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import ViewProvider from "./components/ViewProvider";
import Landing from "./components/Landing";


function App() {
  return (
      <Router>
        <Switch>
          <Route
              path='/'
              component={Home}
          />
          <Route
              path='/home'
              component={Landing}
          />

          <Route
              path='/help'
              component={HelpCenter}
          />
          <Route
              path='/directory'
              component={Directory}
          />

          <Redirect
              to='/'
          />

        </Switch>
      </Router>
  );
}

export default App;
