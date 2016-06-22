/**
 * Created by bingoogolapple on 16/6/22.
 */
'use strict';

import 'semantic-ui/semantic.min.css!';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router';
import App from './App';
import Home from './Home';
import TV from './TV';
import ShowIndex from './ShowIndex';
import Show from './Show';

function handleEnter() {
    console.log("进入详情");
}

function handleLeave() {
    console.log("离开详情");
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="tv" component={TV}>
                <IndexRoute component={ShowIndex}/>
                <Route path="/shows/:id" component={Show} onEnter={handleEnter} onLeave={handleLeave}/>
                /* 将「http://localhost:3000/#/tv/shows/1」重定向到【http://localhost:3000/#/shows/1】*/
                /*<Redirect from="shows/:id" to="/shows/:id"/>*/
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));