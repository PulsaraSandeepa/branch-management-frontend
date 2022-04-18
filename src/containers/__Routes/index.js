import React from 'react';
import {render} from "react-dom";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PublicRoute from "../_PublicRoute";
import AdminRoute from "../_AdminRoute";
import HomePage from "../HomePage";
import Dashboard from "../Dashboard";


const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute exact path='/'
                             component={HomePage}/>
                <AdminRoute exact path='/dashboard'
                            component={Dashboard}/>
            </Switch>
        </BrowserRouter>);
}

export default Routing;