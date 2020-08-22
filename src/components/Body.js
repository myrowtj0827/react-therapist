import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import Blog from "./Blog";
import BlogArticle from "./BlogArticle";
import Directory from "./Directory";
import Landing from "./Landing";
import Pricing from "./Pricing";
import DirectorySearch from "./DirectorySearch";
import FeaturesNotes from "./FeaturesNotes";
import FeaturesOnlineSession from "./FeaturesOnlineSession";
import FeaturesPage from "./FeaturesPage";
import FeaturesPayment from "./FeaturesPayment";
import FeaturesScheduling from "./FeaturesScheduling";
import HelpArticle from "./HelpArticle";
import HelpCenter from "./HelpCenter";
import HelpCenterDetail from "./HelpCenterDetail";
import ViewProvider from "./ViewProvider";


function Body() {
    return (
        <Switch>
            <Route
                path='/home'
                component={Landing}
            />
            <Route
                path='/help-center'
                component={HelpCenter}
             />
            <Route
                path='/help-article'
                component={HelpArticle}
            />
            <Route
                path='/help-center-detail'
                component={HelpCenterDetail}
            />
            <Route
                path='/blog'
                component={Blog}
            />
            <Route
                path='/blog-article'
                component={BlogArticle}
             />
            <Route
                path='/features-payment'
                component={FeaturesPayment}
            />
            <Route
                path='/features-scheduling'
                component={FeaturesScheduling}
            />
            <Route
                path='/features-page'
                component={FeaturesPage}
             />
             <Route
                path='/features-notes'
                component={FeaturesNotes}
             />
             <Route
                path='/features-online-session'
                 component={FeaturesOnlineSession}
             />
            <Route
                path='/view-provider'
                component={ViewProvider}
            />
            <Route
                path='/directory-search'
                component={DirectorySearch}
            />
            <Route
                path='/pricing'
                component={Pricing}
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
