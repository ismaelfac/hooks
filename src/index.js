import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import store from "./redux/store";
import Web from "./views/web";
import Admin from "./views/administrator";
import Auth from "./views/auth";
const nodes = (
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Web} />
            <Route exact path="/sign-in-side" component={Auth} />
            <Route exact path="/admin" component={Admin} />
            <Redirect from="/" to="/"/>
        </Switch>
    </BrowserRouter>
    </Provider>
);

ReactDOM.render(nodes, document.getElementById('root'));