import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Blog from "./Blog";
import Article from "./BlogArticle";
import Directory from "./Directory";
import Landing from "./Landing";
import Pricing from "./Pricing";
import DirectorySearch from "./DirectorySearch";
import FeaturesNotes from "./FeaturesNotes";
import FeaturesOnlineSession from "./FeaturesOnlineSession";
import FeaturesPage from "./FeaturesPage";
import FeaturesPayments from "./FeaturesPayment";
import FeaturesScheduling from "./FeaturesScheduling";
import HelpArticle from "./HelpArticle";
import HelpCenter from "./HelpCenter";
import HelpCenterDetails from "./HelpCenterDetail";
import Home from './Home';


function Body() {
    return (
        <Switch>
            <Route
                path='/home'
                component={Landing}
            />
            <Route
                path='/pricing'
                component={Pricing}
            />
            <Route
                path='/blog'
                component={Blog}
            />
            <Route
                path='/blog-article'
                component={Article}
            />
            <Route
                path='/directory'
                component={Directory}
            />

            <Redirect
                to='/home'
            />
        </Switch>
    );
}

export default Body;
