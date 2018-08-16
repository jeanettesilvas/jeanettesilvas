import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Portfolio, Projects } from '../pages';

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={Portfolio} />
            <Route exact path="/projects" component={Projects} />
        </div>
    </Router>
);

export default Routes;
