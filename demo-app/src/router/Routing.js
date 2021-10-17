import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from '../views/index/Index';

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Index} />
            </Switch>
        </Router>
    )
}

export default Routing;