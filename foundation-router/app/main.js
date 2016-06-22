/**
 * Created by bingoogolapple on 16/6/22.
 */
'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, Redirect} from 'react-router';


class App extends React.Component {
    componentDidMount() {
        console.log("App componentDidMount");
    }

    componentWillReceiveProps() {
        console.log("App componentWillReceiveProps");
    }

    componentDidUpdate() {
        console.log("App componentDidUpdate");
    }

    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <Link to="/" className="item">首页</Link>
                    <Link to="/tv" className="item" query={{orderBy: 'date'}}>电视</Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}

class TV extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    componentDidMount() {
        console.log("TV componentDidMount");
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

class Show extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.params);
    }

    render() {
        return (
            <h3>节目 {this.props.params.id}</h3>
        );
    }
}

class Home extends React.Component {
    componentDidMount() {
        console.log("Home componentDidMount");
    }

    componentWillUnmount() {
        console.log("Home componentWillUnmount");
    }

    render() {
        return (
            <div className="ui info message">首页内容</div>
        );
    }
}

class ShowIndex extends React.Component {
    render() {
        return (
            <div className="ui info message">电视节目列表</div>
        );
    }
}

function handleEnter() {
    console.log("进入详情");
}

function handleLeave() {
    console.log("离开详情");
}

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="tv" component={TV}>
                <IndexRoute component={ShowIndex}/>
                <Route path="/shows/:id" component={Show} onEnter={handleEnter} onLeave={handleLeave}/>
                <Redirect from="shows/:id" to="/shows/:id"/>
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));